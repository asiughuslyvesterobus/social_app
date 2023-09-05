const mongoose = require("mongoose");

const conn = mongoose.connection;

const dbconnect = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  conn.on("error", (error) =>
    console.log("mongoose connection error :", error)
  );
  conn.once("open", () => console.log("connected to mongoDB"));
};

module.exports.dbconnect = dbconnect;
module.exports.conn = conn;
