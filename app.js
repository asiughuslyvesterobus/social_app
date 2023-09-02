const dotenv = require("dotenv").config();
const express = require("express");

const { dbconnect } = require("./lib/dbconnect");

const app = express();

app.use(express.json());

dbconnect();

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server listerning on port ${port}...`));
