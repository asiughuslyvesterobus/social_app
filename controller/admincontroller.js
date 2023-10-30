const User = require("../models/user");
// const Admin = require("../models/admin");
const Post = require("../models/post");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { BadRequestError, NotFoundError } = require("../lib/error");
const { validateSignup } = require("../lib/validation/userValidation");
const {
  sendAccountActivation
} = require("../lib/message/account-activation-message");

const adminSignUp = async (req, res, next) => {
  const error = await validateSignup(req.body);
  if (error) {
    throw new BadRequestError(error);
  }

  const { firstName, lastName, profile, email, phone, password } = req.body;

  //check if email exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("User already exists");
  }

  //check if phone exists
  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    throw new BadRequestError("Phone number already exists");
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    profile,
    phone,
    password: hashedPassword
  });

  //create activation token
  const token = await bcryptjs.hash(email.toString(), 10);
  const oneHour = 60 * 60 * 1000;

  //assign activation token to user
  user.AccountactivationToken = token;
  user.AccountTokenExpires = new Date(Date.now() + oneHour);
  user.accountRole = "admin";
  await user.save();

  // send activation email
  await sendAccountActivation({ email, token });

  res.status(201).json({
    success: true,
    message: " Click the link to activate your account"
  });
};

// const adminLogin = async (req, res) => {
//   const error = await AdminValidateLogin(req.body);
//   if (error) {
//     throw new BadRequestError(error);
//   }

//   const { email, password } = req.body;
//   const admin = await Admin.findOne({ email });
//   if (!admin) {
//     throw new BadRequestError("Invalid email or password");
//   }

//   const isValid = await bcryptjs.compare(password, admin.password);
//   if (!isValid) {
//     throw new BadRequestError("Invalid email or password");
//   }
//   const payload = {
//     _id: admin._id,
//     email: admin.email
//   };

//   const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
//   const oneDay = 24 * 60 * 60 * 1000;

//   res.cookie("accessToken", token, {
//     hhtpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     signed: true,
//     expires: new Date(Date.now() + oneDay)
//   });

//   res.status(200).json({ success: true, message: "login successfully" });
// };

const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password -inbox");
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

// @Method: POST  /admin/posts
// @Description : admin signup
// @Access: private

const getAllUsersPost = async (req, res) => {
  const posts = await Post.find();

  const page = req.query.page;

  if (page) {
    const startingIndex = (page - 1) * 10;
    const lastIndex = startingIndex + 10;
    const postsBypage = posts.slice(startingIndex, lastIndex);

    res.status(200).json({ success: true, message: postsBypage });
    return;
  }

  res.status(200).json({ success: true, message: posts });
};

//@Method: PUT /admin/:userId/suspend
//@Description : suspend an account
//@Access: private
const suspendUser = async (req, res) => {
  const userId = req.params.userId;

  //   find user
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  //   change user account status to suspended
  user.accountStatus = "suspended";

  await user.save(
    res.status(200).json({ success: true, message: "User suspended" })
  );
};

// @Method: GET /admin/suspended-users
// @Description : admin signup
// @Access: private

const getSuspendedUsers = async (req, res) => {
  const page = req.query.page;

  //   find users with accountStatus = suspended
  const suspendUsers = await User.find({ accountStatus: "suspended" });
  //  select( .
  //   "password -inbox"
  // );

  if (!suspendUsers) {
    res.status(200).json({ success: true, message: "No suspended user" });
    return;
  }

  // pagenation logic
  if (page) {
    const startingIndex = (page - 1) * 10;
    const lastIndex = startingIndex + 10;
    const profilesByPage = suspendUsers.slice(startingIndex, lastIndex);
    res.status(200).json({ success: true, message: profilesByPage });
    return;
  }

  res.status(200).json({ success: true, message: suspendUsers });
};
//@Method: PUT /admin/:userId/activate
//@Description : admin signup
//@Access: private

const activeUser = async (req, res) => {
  const userId = req.params.userId;

  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  user.accountStatus = "active";
  await user.save();
  res.status(200).json({ success: true, message: "User active" });
};

//@Method: POST /admin/:postId/delete
//@Description : admin signup
//@Access: private

const deletePost = async (req, res) => {
  const postId = req.params.postId;

  const postFound = await Post.findById(postId);
  if (!postFound) {
    throw new NotFoundError("Post not found");
  }

  const post = await Post.findByIdAndDelete(postId);

  res.status(200).json({ succes: true, message: "Post deleted", post });
};

module.exports.adminSignUp = adminSignUp;
module.exports.getAllUsers = getAllUsers;
module.exports.getAllUsersPost = getAllUsersPost;
module.exports.suspendUser = suspendUser;
module.exports.getSuspendedUsers = getSuspendedUsers;
module.exports.activeUser = activeUser;
module.exports.deletePost = deletePost;
