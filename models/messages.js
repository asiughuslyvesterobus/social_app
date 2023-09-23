const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  ],
  messages: [
    {
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      message: { type: String, minLength: 1 },
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

const Message = mongoose.model("mesage", messageSchema);

module.exports = Message;
