const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 50,
    trim: true,
    require: true,
  },
  lastName: {
    type: String,
    maxlength: 50,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    trim: true,
    maxlength: 15,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    maxlength: 220,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
});

const User = mogoose.model("user", userSchema);

module.exports.User = User;
