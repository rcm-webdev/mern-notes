import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
    return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link className="btn btn-ghost text-xl" to="/">Notes App</Link>
                <nav>
                    
                    <Link className="btn btn-primary" to="/create">
                        <PlusIcon className="size-5 font-bold mr-2" />
                        <span className="hidden md:inline">Create Note</span>
                    </Link>
                </nav>
            </div>
        </div>
        </header>
    )
}

export default Navbar;