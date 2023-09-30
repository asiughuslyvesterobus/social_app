const express = require("express");
const isLogin = require("../lib/error/middleware/auth-middleware");

const {
  message,
  getMessages,
  createGroup,
  messageGroup
} = require("../controller/messagecontroller");
const router = express.Router();

router.post("/:userId", isLogin, message);
router.get("/:messageId/view", isLogin, getMessages);
router.post("/create/group", isLogin, createGroup);
router.post("/:groupId/message", isLogin, messageGroup);

module.exports = router;
