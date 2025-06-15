const Note = require('../models/noteModel')

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (err) {
        console.log(`Error getting notes: ${err.message}`)
        res.status(500).json({message: err.message})
    }
}

//HTTP POST request to create a new note
const createNote = async (req, res) => {
    
    try {
        const {title, content} = req.body
        if (!title || !content) {
            return res.status(400).json({message: 'Title and content required'})
        }
        const newNote = await Note.create({title, content})
        res.status(201).json({message: `Note ${newNote._id} created successfully`})
    } catch (err) {
        console.log(`Error creating note: ${err.message}`)
        res.status(500).json({message: err.message})
    }
}

//HTTP PUT request to update a note
const updateNote = async(req, res) => {
   try{
    const {id} = req.params
    const {title, content} = req.body
    const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true})
    if (!updatedNote) {
        return res.status(404).json({message: `Note ${id} not found`})
    }
    res.status(200).json({message: `Note ${id} updated successfully`})
   } catch (err) {
    console.log(`Error updating note: ${err.message}`)
}
}


//HTTP DELETE request to delete a note
const deleteNote = async(req, res) => {
    try{
        const {id} = req.params
        const deletedNote = await Note.findByIdAndDelete(id)
        if (!deletedNote) {
            return res.status(404).json({message: `Note ${id} not found`})
        }
        res.status(200).json({message: `Note ${id} deleted successfully`})
    } catch (err) {
        console.log(`Error deleting note: ${err.message}`)
    }
}

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}