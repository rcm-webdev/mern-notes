import { Trash2Icon, PenSquareIcon} from "lucide-react";
import { Link } from "react-router";
import formatDate from "../lib/utils";
const NoteCard = ({note}) => {
    return (
        <Link to={`/note/${note._id}`} className="card bg-base-200 hover:bg-base-100 transition-all duration-300 border-t-4 border-primary border-solid">
            <div className="card-body">
                <h2 className="card-title text-lg font-bold text-base-content"> {note.title} </h2>
                <p className="text-sm text-base-content/80"> {note.content} </p>
                <div className="card-actions justify-between items-center">
                    <span className="text-sm text-base-content/80"> {formatDate(note.createdAt)} </span>
                    <div className="flex gap-2 items-center">
                        
                            <PenSquareIcon className="size-4" />
                      
                        <button className="btn btn-ghost btn-sm">

                            <Trash2Icon className="size-4 text-error" />
                        </button> 
                        
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard;