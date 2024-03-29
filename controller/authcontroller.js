const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const {
  validateSignup,
  validateLogin,
  validateAccountEdit
} = require("../lib/validation/userValidation");
const {
  BadRequestError,
  Unauthorized,
  NotFoundError
} = require("../lib/error");
const {
  sendAccountActivation
} = require("../lib/message/account-activation-message");
const {
  sendSuccessfulPasswordReset
} = require("../lib/message/password-rest-successful");
const {
  updateChangeAuthProperties,
  checkValidation
} = require("../lib/helpers.js/functions/authfunction");
const { sendPasswordRest } = require("../lib/message/password -reset-message");

//@Method:POST /auth/signup
//@Desc:To signup a user
//@Access:Public
const signup = async (req, res, next) => {
  const error = await validateSignup(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const { firstName, lastName, email, profile, phone, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("User already exist");
  }
  const { userName } = profile;
  const usernameExists = await User.findOne({ userName });
  if (usernameExists) {
    throw new BadRequestError("Username has already been taken");
  }
  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    throw new BadRequestError("Phone number already exist");
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

  await user.save();

  const token = await bcryptjs.hash(email.toString(), 10);
  const oneHour = 60 * 60 * 1000;

  user.AccountactivativationToken = token;
  user.AccountTokenExpires = new Date(Date.now() + oneHour);

  await user.save();

  await sendAccountActivation({ email, token });

  res.status(201).json({
    success: true,
    message: "click the link in your email to activate your account "
  });
};

//@Method:GET /auth/activate-account
//@Desc: Axtivate account
//@Access:Public

const activateAccount = async (req, res) => {
  // find user
  const user = await User.findOne({
    AccountactivativationToken: req.query.token,
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

const Login = async (req, res) => {
  const error = await validateLogin(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const { email, password } = req.body;

  // find user by email or username
  const user = await User.findOne({ email });

  if (!user) {
    throw new BadRequestError("invalid email or password");
  }

  const valid = await bcryptjs.compare(password, user.password);
  if (!valid) {
    throw new BadRequestError("invalid email or password");
  }

  //check if user is activated
  if (!user.isActivated) {
    const response = await checkValidation(user, email);
    res.status(200).json(response);
    return;
  }
  const payload = {
    _id: user._id,
    email: user.email
  };

  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  const oneDay = 24 * 60 * 60 * 1000;

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay)
  });
  res.status(200).json({ success: true, msg: "login sucessful" });
};
//@Method:POST auth/forgot-password
//@Access:Private
//@Desc: to request for password reset

const forgetPassword = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError("invalid email");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("user does not exist");
  }
  const token = await bcryptjs.hash(email.toString(), 10);

  const thirtyMinutes = 30 * 60 * 1000;
  user.passwordRestToken = token;
  user.passwordRestExpired = new Date(Date.now() + thirtyMinutes);

  await user.save();

  await sendPasswordRest({ email, token });

  res.status(200).json({
    success: true,
    message: "check your email for password reset link"
  });
};

// Method: post auth/reset-password
//@Desc: reset password
//@Access: Private
const resetPassword = async (req, res, next) => {
  const { newPassword } = req.body;
  if (!newPassword) {
    throw new BadRequestError("invalid password");
  }

  const user = await User.findOne({
    passwordRestToken: req.query.token,
    passwordRestExpired: { $gt: Date.now() }
  });

  if (!user) {
    throw new BadRequestError("Link expired.please,request a new link");
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedpassword = await bcryptjs.hash(newPassword, salt);

  // reassign user properties
  user.password = hashedpassword;
  user.passwordRestToken = undefined;
  user.passwordRestExpired = undefined;
  const email = user.email;
  const firstName = user.firstName;

  await user.save();

  await sendSuccessfulPasswordReset({ email, firstName });

  res.status(200).json({ success: true, msg: "password reset successful" });
};

//@Method:PUT auth/edit
//@Desc:Edit account
//@Access:private
const editAccount = async (req, res, next) => {
  const error = await validateAccountEdit(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const userId = req.user._id;

  let { firstName, lastName, phone, password } = req.body;

  // find user
  let user = await User.findById(userId);

  // check password
  const valid = await bcryptjs.compare(password, user.password);
  if (!valid) {
    throw new BadRequestError("invalid password");
  }

  user = updateChangeAuthProperties(user, {
    firstName,
    lastName,
    phone
  });

  const accountBody = {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone
  };
  res.status(200).json({ message: "account updated successfully " });
};

//@Method:DELETE auth/logout
//@Desc:logout
//@Access:Private

const logOut = async (req, res, next) => {
  res.cookie("accessToken", "Logout", {
    httpOnly: true,
    signed: true,
    expires: new Date(Date.now())
  });
  res.status(200).json({ success: true, msg: "user loged out" });
};
//@Method:DELETE auth/delete
//@Desc:logout
//@Access:Private

const deleteAccount = async (req, res, next) => {
  const { accessToken } = req.signedCookies;
  if (!accessToken) {
    throw new Unauthorized("User must be logged in to delete account");
  }
  const decoded = await jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);
  req.user = await User.findByIdAndDelete(decoded._id);
  res.status(200).json({ success: true, message: "user deleted" });
};

//@Method:put auth/block-account
//@Desc:blockAccount
//@Access:Private

const blockAccount = async (req, res, next) => {
  const userId = req.user._id;
  const { userName } = req.body;
  if (!userName) {
    throw new BadRequestError("userName required");
  }

  const blocked = await User.findOne({ "profile.userName": userName });
  const user = await User.findById(userId);
  user.blockedAccounts.push(blocked._id);
  await user.save();
  res.status(200).json({ success: true, message: "User blocked" });
};

module.exports.signUp = signup;
module.exports.Login = Login;
module.exports.activateAccount = activateAccount;
module.exports.forgetPassword = forgetPassword;
module.exports.resetPassword = resetPassword;
module.exports.logOut = logOut;
module.exports.deleteAccount = deleteAccount;
module.exports.editAccount = editAccount;
module.exports.blockAccount = blockAccount;
