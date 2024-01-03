// Connect to MongoDB
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Check if the connection is successful
const connectDB = mongoose.connection;

connectDB.on("error", console.error.bind(console, "MongoDB connection error:"));
connectDB.once("open", function () {
  console.log("Connected to the database");
});

module.exports = { connectDB };
