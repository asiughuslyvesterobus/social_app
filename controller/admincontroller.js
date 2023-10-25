const {
  ValidateAdminSignup,
  AdminValidateLogin
} = require("../lib/validation/userValidation");

const User = require("../models/user");
const Admin = require("../models/admin");
const Post = require("../models/post");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../lib/error");

const adminSignUp = async (req, res, next) => {
  const error = await ValidateAdminSignup(req.body);
  if (error) {
    throw new BadRequestError(error);
  }

  const { firstName, lastName, email, password } = req.body;
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  let admin = new Admin({
    firstName,
    lastName,
    email,
    password: hashedPassword
  });

  await admin.save();

  res.status(200).json({ message: "signup successfull" });
};

const adminLogin = async (req, res) => {
  const error = await AdminValidateLogin(req.body);
  if (error) {
    throw new BadRequestError(error);
  }

  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new BadRequestError("Invalid email or password");
  }

  const isValid = await bcryptjs.compare(password, admin.password);
  if (!isValid) {
    throw new BadRequestError("Invalid email or password");
  }
  const payload = {
    _id: admin._id,
    email: admin.email
  };

  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  const oneDay = 24 * 60 * 60 * 1000;

  res.cookie("accessToken", token, {
    hhtpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay)
  });

  res.status(200).json({ success: true, message: "login successfully" });
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  const page = req.query.page;

  const profiles = users.map((user) => user.profile);
  profiles.forEach((profile) => (profile.inbox = undefined));

  if (page) {
    const startingIndex = (page - 1) * 10;
    const lastIndex = startingIndex + 10;
    const profilesByPage = profiles.slice(startingIndex, lastIndex);

    res.status(200).json({ success: true, message: profilesByPage });
    return;
  }
  res.status(200).json({ success: true, message: profiles });
};

const getAllUsersPost = async (req, res) => {
  const users = await User.find().populate("posts");
  const page = req.query.page;
  const allPosts = [];

  //   const post = user.map((user) => user.post);
  //   post.forEach((post) => (post.inbox = undefined));

  users.forEach((user) => {
    user.posts.forEach((post) => {
      allPosts.push(post);
    });
  });

  if (page) {
    const startingIndex = (page - 1) * 10;
    const lastIndex = startingIndex + 10;
    const postsBypage = allPosts.slice(startingIndex, lastIndex);

    res.status(200).json({ success: true, message: postsBypage });
    return;
  }

  res.status(200).json({ success: true, message: allPosts });
};

module.exports.adminSignUp = adminSignUp;
module.exports.adminLogin = adminLogin;
module.exports.getAllUsers = getAllUsers;
module.exports.getAllUsersPost = getAllUsersPost;
