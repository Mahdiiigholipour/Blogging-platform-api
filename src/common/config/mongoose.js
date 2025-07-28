const mongoose = require("mongoose");
const AppError = require("../utils/Error");
const { MONGO_URL } = require("./index");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("MongoDB connection error:", err);
    // خروج از پروسه در صورت شکست اتصال
    throw new AppError("Database connection failed", 500);
  }

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected! Attempting reconnect…");
    setTimeout(connectDB, 5000);
  });
};

module.exports = connectDB;
