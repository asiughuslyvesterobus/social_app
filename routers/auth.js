const express = require("express");
const {
  signUp,
  activateAccount,
  Login,
  forgetPassword,
  logOut,
  deleteUser,
  editAccount,
  resetPassword,
  blockAccount
} = require("../controller/authcontroller");
const isLogin = require("../lib/error/middleware/auth-middleware");
const router = express.Router();

router.post("/signup", signUp);
router.get("/activate-account", activateAccount);
router.post("/login", Login);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.delete("/logout", logOut);
router.delete("/delete", isLogin, deleteUser);
router.put("/edit", isLogin, editAccount);
router.put("/block-account", isLogin, blockAccount);

module.exports = router;
