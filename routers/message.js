const express = require("express");
const isLogin = require("../lib/error/middleware/auth-middleware");

const {
  message,
  getMessages,
  createGroup,
  messageGroup,
  removeFromGroup,
  addToGroup,
  makeAdmin,
  sharePost,
  leaveGroup,
  deleteMessage
} = require("../controller/messagecontroller");

const router = express.Router();

router.post("/:userId", isLogin, message);
router.get("/:messageId/view", isLogin, getMessages);
router.post("/create/group", isLogin, createGroup);
router.post("/:groupId/message", isLogin, messageGroup);
router.put("/:groupId/remove", isLogin, removeFromGroup);
router.put("/:groupId/add", isLogin, addToGroup);
router.put("/:groupId/admin", isLogin, makeAdmin);
router.put("/:messageId/share", isLogin, sharePost);
router.delete("/:groupId/group/exit", isLogin, leaveGroup);
router.delete("/:messageId/:conversationId", isLogin, deleteMessage);


module.exports = router;
