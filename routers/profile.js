const express = require("express");
const { isLogin } = require("../lib/error/middleware/auth-middleware");
const {
  followProfile,
  viewFollowing,
  viewfollowers,
  viewFollowRequest,
  followRequestAction,
  editProfile,
  findProfile,
  myProfile
} = require("../controller/profliecontroller");
const { editAccount } = require("../controller/authcontroller");
const router = express.Router();

router.get("/profile", isLogin, myProfile);
router.post("/follow", isLogin, followProfile);
router.get("/following", isLogin, viewFollowing);
router.get("/followers", isLogin, viewfollowers);
router.put("/edit", isLogin, editAccount);
router.post("/follow-request/action", isLogin, followRequestAction);
router.put("/edit", isLogin, editProfile);
router.get("/followers", isLogin, viewFollowRequest);
router.post("/find", isLogin, findProfile);

module.exports = router;
