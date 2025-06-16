import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import api from "../lib/axios";
import { toast } from "react-hot-toast";
import formatDate from "../lib/utils";

const Note = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await api.get(`/notes/${id}`);
                setNote(response.data);
            } catch (error) {
                toast.error("Error fetching note"); 
            } finally {
                setIsLoading(false);
            }
        };
        fetchNote();
    }, [id]);
    return (
        <div className="min-h-screen bg-base-200">  
            <div className="container mx-auto p-4">
                <Link to="/" className="btn btn-ghost border-base-content/20 mb-4">
                    <ArrowLeftIcon className="size-4" />
                    Back to Notes
                </Link>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-base-content">{note?.title}</h2>
                        <p className="text-base-content/80">{note?.content}</p>
                        <p className="text-sm text-base-content/80">{formatDate(note?.createdAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note;