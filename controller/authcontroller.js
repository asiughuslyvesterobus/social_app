const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const { validateSignup } = require("../lib/validation/userValidation");
const { BadRequestError } = require("../lib/error");

//@Method:POST /auth/signup
//@Desc:To signup a user
//@Access:Public
const signup = async (req, res, next) => {
  const error = await validateSignup(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const { firstName, lastName, email, phone, password } = req.body;

  const userExists = await User.findone({ email });
  if (userExists) {
    throw new BadRequestError("email already exist");
  }
  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    throw new BadRequestError("phone number already exist");
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword
  });

  await user.save();

  const token = await bcryptjs.hash(email.tostring(), 10);
  const thirtyMinutes = 30 * 60 * 1000;

  user.AccountactivativationToken = token;
  user.AccountTokenExpires = new Date(Date.now() + thirtyMinutes);
  await sendAccountActivation({ email, token });
  res.status(201).json({
    success: true,
    message: "click the link in your email to activate your account "
  });
};

//@Method:GET /auth/activate-account?token=token
//@Desc: Axtivate account
//@Access:Public
const activateAccount = async (req, res) => {
  const user = await User.findOne({
    AccountactivativationToken: req.url.token,
    AccountTokenExpires: { $gt: Date.now() }
  });
  if (!user) {
    throw new BadRequestError("link has expired. please, request new link ");
  }
  user.isActivated = true;
  user.AccountactivativationToken = undefined;
  user.AccountTokenExpires = undefined;
  await user.save();
  res.status(200).json({ success: true, msg: "Account activated" });
};

module.exports.signUp = signup;
module.exports.activateAccount = activateAccount;
