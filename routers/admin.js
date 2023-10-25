const express = require("express");
const {
  adminSignUp,
  adminLogin,
  getAllUsers,
  getAllUsersPost
} = require("../controller/admincontroller");

const router = express.Router();

router.post("/signup", adminSignUp);
router.post("/login", adminLogin);
router.get("/users", getAllUsers);
router.get("/posts", getAllUsersPost);


module.exports = router;
