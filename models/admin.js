const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    Max: 20
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    Max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    maxLength: 225
  },
  
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
