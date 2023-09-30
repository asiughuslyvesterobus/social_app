const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minLength: 2,
      maxLength: 50,
      trim: true,
      require: true
    },
    lastName: {
      type: String,
      minLength: 2,
      maxlength: 50,
      trim: true,
      required: true
    },
    profile: {
      userName: {
        type: String,
        minlength: 2,
        maxlength: 25,
        trim: true,
        required: true,
        unique: true
      },
      bio: {
        type: String,
        minlength: 3,
        maxlength: 250
      },
      profileType: {
        type: String,
        enum: ["public", "private"],
        default: "public"
      },
      followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      inbox: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          userName: { type: String }
        }
      ]
    },
    followRequest: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 15,
      required: true,
      unique: true
    },
    imgUrl: {
      type: String,
      trim: true,
      default: ""
    },
    imgPath: {
      type: String,
      trim: true,
      default: ""
    },
    password: {
      type: String,
      maxlength: 220,
      required: true
    },
    isActivated: {
      type: Boolean,
      default: false
    },
    AccountactivativationToken: String,
    AccountTokenExpires: Date,
    passwordRestToken: String,
    passwordRestExpired: Date
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
