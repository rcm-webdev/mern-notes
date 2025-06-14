const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.get("/api/notes", (req, res) => {
    res.send("You have created an api endpoint")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}. You better go catch it!`);
});