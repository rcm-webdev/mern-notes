import { NotebookIcon, FilePlus2 } from "lucide-react"
import { Link } from "react-router"

const NoNotesFound = () => {
    return(
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-4">
                <NotebookIcon className="size-16 text-primary"/>
            </div>
            <div>
                <h2 className="text-2xl font-bold">No notes found</h2>
                <p className="text-base-content/50">Create a new note to get started</p>
            </div>
            <div>
                <Link to="/create" className="btn btn-primary">
                <FilePlus2 className="size-4 mr-2"/>
                Create Your First Note</Link>
            </div>
        </div>
    )
}

export default NoNotesFound;