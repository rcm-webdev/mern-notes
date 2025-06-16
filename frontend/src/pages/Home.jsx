import axios from "axios";
import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";

const Home = () => {
    const [notes, setNotes] = useState([]);

   useEffect(() => {
    const fetchNotes = async () => {
        try {
           
            const res = await axios.get("http://localhost:2121/api/notes");
            console.log("fetched data")
            setNotes(res.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    }
    fetchNotes();
  }, [])

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
        </div>
    )
}

export default Home;