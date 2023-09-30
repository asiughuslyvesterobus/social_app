const express = require("express");
const isLogin = require("../lib/error/middleware/auth-middleware");
const {
  post,
  commentPost,
  likePost,
  deletePost,
  deleteComment
} = require("../controller/postcontroller");

const router = express.Router();

router.post("/post", isLogin, post);
router.put("/:postId/like", isLogin, likePost);
router.post("/:postId/comment", isLogin, commentPost);
router.delete("/:postId/delete", isLogin, deletePost);
router.delete("/delete/:commentId", isLogin, deleteComment);


module.exports = router;
