const express = require("express");
const isLogin = require("../lib/error/middleware/auth-middleware");
const {
  followProfile,
  viewFollowing,
  viewfollowers,
  Post,
  commentPost,
  likePost,
  viewFollowRequest,
  viewProfile,
  followRequestAction,
  editProfile,
} = require("../controller/profliecontroller");
const { editAccount } = require("../controller/authcontroller");
const router = express.Router();

router.post("/follow", isLogin, followProfile);
router.get("/following", isLogin, viewFollowing);
router.get("/followers", isLogin, viewfollowers);
router.post("/post", isLogin, Post);
router.post("/:postId/comment", isLogin, commentPost);
router.put("/:postId/like", isLogin, likePost);
router.put("/edit", isLogin, editAccount);
router.post("/follow-request/action", isLogin, followRequestAction);
router.put("/edit", isLogin, editProfile);
router.get("/followers", isLogin, viewFollowRequest);
router.post("/find", isLogin, viewProfile);


module.exports = router;
