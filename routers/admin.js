const express = require("express");
const {
  adminSignUp,
  getAllUsers,
  getAllUsersPost,
  suspendUser,
  getSuspendedUsers,
  activeUser,
  deletePost
} = require("../controller/admincontroller");
const { isLogin, isAdmin } = require("../lib/error/middleware/auth-middleware");

const router = express.Router();

router.post("/signup", adminSignUp);
router.put("/:userId/suspended", isLogin, isAdmin, suspendUser);
router.get("/users", isLogin, isAdmin, getAllUsers);
router.post("/posts", isLogin, isAdmin, getAllUsersPost);
router.get("/suspended-users", isLogin, isAdmin, getSuspendedUsers);
router.put("/:userId/activate", isLogin, isAdmin, activeUser);
router.delete("/:postId/delete", isLogin, isAdmin, deletePost);

module.exports = router;
