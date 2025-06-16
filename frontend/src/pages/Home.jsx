import axios from "axios";
import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";

const Home = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const res = await axios.get("http://localhost:2121/api/notes");
            setNotes(res.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleNoteDelete = (deletedNoteId) => {
        setNotes(notes.filter(note => note._id !== deletedNoteId));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note) => (
                <NoteCard 
                    key={note._id} 
                    note={note} 
                    onDelete={handleNoteDelete}
                />
              ))}
            </div>
        </div>
    )
}

export default Home;