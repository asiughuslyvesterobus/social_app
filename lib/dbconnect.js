const mongoose = require("mongoose");
const conn = mongoose.connection;

const dbConnect = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  conn.on("error", (error) =>
   console.log("mongoose connection error:", error)
   );

  conn.once(`open`, () => console.log("connected to mongoDB"));
};

module.exports.dbConnect = dbConnect;
module.exports.conn = conn;
