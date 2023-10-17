require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const {
  authRoutes,
  homeRouters,
  profileRouters,
  messageRouters,
  postRouters
} = require("./routers");
const { dbConnect } = require("./lib/dbconnect");
const {
  notFound,
  errorHandler
} = require("./lib/error/middleware/error-middleware");
// const { BadRequestError } = require("./lib/error");

const app = express();

if (!process.env.JWT_PRIVATE_KEY) {
  throw new Error("JWT private is not defined.");
}

app.use(cookieParser(process.env.JWT_PRIVATE_KEY));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
  })
);

app.use(helmet());
app.use(
  compression({
    level: 6,
    threshold: 0
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", homeRouters);
app.use("/api/profile", profileRouters);
app.use("/api/post", postRouters);
app.use("/api/message", messageRouters);

app.use(notFound);
app.use(errorHandler);
dbConnect();

const port = process.env.PORT || 4400;
app.listen(port, () => console.log(`server listerning on port ${port}...`));
