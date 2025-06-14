const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

//we are building api endpoints
//these api endpoints are responsible for creating, reading, updating, and deleting data. 


//this is an api endpoint: /api/notes
//from CRUD: READ
app.get("/api/notes", (req, res) => {

    //client sends a GET request to the server
    //GET requests are used to retrieve data from the server. 
    //this is the response that the server sends back to the client.
    
    res.send("You created your first api endpoint which is a GET request");
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}. You better go catch it!`);
});
