const express = require("express");
const router = express.Router();
//controllers are used to handle the logic of the routes
const { getNotes, getNoteById, createNote, updateNote, deleteNote } = require("../controllers/noteController");


router.get("/", getNotes)

router.get("/:id", getNoteById)

router.post("/", createNote)

router.put("/:id", updateNote)

router.delete("/:id", deleteNote)

module.exports = router;