
//express is a powerful web framework for node.js
const express = require("express");
const app = express();
const connectDB = require("./config/database");

//dotenv is a module that loads env variables from the .env file in the config directory
require("dotenv").config({path: "./config/.env"});

connectDB();

//middleware to parse json bodies
app.use(express.json());

//handle routes
app.use("/api/notes", require("./routes/notes"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}. You better go catch it!`);
});