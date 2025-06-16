import api from "../lib/axios";
import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";
import NoNotesFound from "../components/NoNotesFound";

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNotes = async () => {
        try {
            const res = await api.get("/notes");
            setNotes(res.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleNoteDelete = (deletedNoteId) => {
        setNotes(notes.filter(note => note._id !== deletedNoteId));
    };

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto p-4 flex justify-center items-center min-h-[200px]">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            {notes.length === 0 && (
                <NoNotesFound/>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.length > 0 && (
                    notes.map((note) => (
                        <NoteCard 
                            key={note._id} 
                            note={note} 
                            onDelete={handleNoteDelete}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Home;