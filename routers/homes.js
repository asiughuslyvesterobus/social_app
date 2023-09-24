const express = require("express");
const { homePage, viewPostByTopic } = require("../controller/homecontroller");
const isLogin = require("../lib/error/middleware/auth-middleware");
const router = express.Router();

router.get("/home", isLogin, homePage);
router.post("/home/search", isLogin, viewPostByTopic);

module.exports = router;
