
//express is a powerful web framework for node.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");

//dotenv is a module that loads env variables from the .env file in the config directory
dotenv.config({path: "./config/.env"});

app.get("/api/notes", (req, res) => {
    res.send("You have created an api endpoint")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}. You better go catch it!`);
});