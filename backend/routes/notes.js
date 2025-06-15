const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send("You have created an api endpoint from the notes route")
})

router.post("/", (req, res) => {
    res.json({message: `You have created a post with id: ${req.params.id}`})
})

router.put("/:id", (req, res) => {
    res.json({message: `You have updated note ${req.params.id}`})
})

router.delete("/:id", (req, res) => {
    res.json({message: `You have deleted note ${req.params.id}`})
})

module.exports = router;