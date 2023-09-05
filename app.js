require("dotenv").config();
require("express-async-error"); 
const express = require("express");
const authRoutes = require("./routers/auth");
const { dbconnect } = require("./lib/dbconnect");
const {
  notFound,
  errorHandler
} = require("./lib/error/middleware/error-middleware");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);
dbconnect();

const port = process.env.PORT || 5400;
app.listen(port, () => console.log(`server listerning on port ${port}...`));
