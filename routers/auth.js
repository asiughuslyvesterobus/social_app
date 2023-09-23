const express = require("express");
const {
  signUp,
  activateAccount,
  Login,
  forgetPassword,
  restPassword,
  logOut,
  deleteUser,
  editAccount,
  blockAccount
} = require("../controller/authcontroller");
const isLogin = require("../lib/error/middleware/auth-middleware");
const router = express.Router();

router.post("/signup", signUp);
router.get("/activate-account", activateAccount);
router.post("/login", Login);
router.post("/forget-password", forgetPassword);
router.post("/rest-password?token=token", restPassword);
router.delete("/logout", logOut);
router.delete("/delete", isLogin, deleteUser);
router.put("/edit", isLogin, editAccount);
router.put("/block-account", isLogin, blockAccount);


module.exports = router;
