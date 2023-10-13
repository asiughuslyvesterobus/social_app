const express = require("express");
const isLogin = require("../lib/error/middleware/auth-middleware");

const {
  message,
  getMessages,
  createGroup,
  messageGroup,
  removeFromGroup,
  addToGroup,
  makeAdmin
} = require("../controller/messagecontroller");

const router = express.Router();

router.post("/:userId", isLogin, message);
router.get("/:messageId/view", isLogin, getMessages);
router.post("/create/group", isLogin, createGroup);
router.post("/:groupId/message", isLogin, messageGroup);
router.put("/:groupId/remove", isLogin, removeFromGroup);
router.put("/:groupId/add", isLogin, addToGroup);
router.put("/:groupId/admin", isLogin, makeAdmin);

module.exports = router;
