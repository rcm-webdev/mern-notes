
const getNotes = (req, res) => {
    res.send("this is an api endpoint from the notes route, and the logic is in the noteController")   
}

const createNote = (req, res) => {
    res.json({message: `You have created a post with id: ${req.params.id}`})
}

const updateNote = (req, res) => {
    res.json({message: `You have updated note ${req.params.id}`})
}

const deleteNote = (req, res) => {
    res.json({message: `You have deleted note ${req.params.id}`})
}

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
}