const express = require("express");
const { signUp, activateAccount } = require("../controller/authcontroller");
const router = express.Router();

router.post("/signup", signUp);
router.get("/activate-account?token=token", activateAccount);

module.exports = router;
