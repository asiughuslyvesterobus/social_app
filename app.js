require("dotenv").config();
require("express-async-error");
const express = require("express");
const cookieParser = require("cookie-parser");
const { authRoutes, homeRouters, profileRouters } = require("./routers");
const { dbConnect } = require("./lib/dbconnect");
const {
  notFound,
  errorHandler,
} = require("./lib/error/middleware/error-middleware");


const app = express();

app.use(express.json());
app.use(cookieParser(process.env.JWT_PRIVATE_KEY));

app.use("/api/auth", authRoutes);
app.use("/api/users", homeRouters);
app.use("/api/profile", profileRouters);

app.use(notFound);
app.use(errorHandler);
dbConnect();

const port = process.env.PORT || 4400;
app.listen(port, () => console.log(`server listerning on port ${port}...`));
