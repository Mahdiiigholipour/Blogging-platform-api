const mongoose = require("mongoose");
const { MONGO_URL } = require(".");

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) =>
    console.log("MongoDB connection faild! info:" + err.stack + err.message)
  );

module.exports = mongoose;
