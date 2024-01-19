const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/contact";


async function connectDB() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    // Handle connection error, for example, exit the application
    process.exit(1);
  }
}

connectDB();

// Additional code for handling routes or other configurations can be added here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
