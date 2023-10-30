const jwt = require("jsonwebtoken");
const User  = require("../../../models/user");

const isLogin = async (req, res, next) => {
  const { accessToken } = req.signedCookies;
  // console.log(accessToken);

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);

      req.user = await User.findById(decoded._id).select("-password");
      if (!req.user) {
        throw new Error("invalid user");
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ success: false, msg: "please login to continue" });
      return;
    }
  } else {
    res.status(401).json({ success: false, msg: "please login to continue" });
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.accountRole !== "admin") {
  
  }
  next();
};

module.exports = { isLogin, isAdmin };
