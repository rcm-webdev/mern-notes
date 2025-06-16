import { Link } from "react-router";
import { FilePlus2 } from "lucide-react";

const Navbar = () => {
    return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link className="btn btn-ghost text-xl" to="/">
                <span className="bg-gradient-to-r from-accent via-accent-focus to-primary bg-clip-text text-transparent">Notes App</span>
                </Link>
                <nav>
                    <div >
                    
                    <Link className="btn btn-primary btn-outline " to="/create">
                        <FilePlus2 className="size-4 font-bold mr-2" />
                        <span className="hidden md:inline ">Create Note</span>
                    </Link>
                    </div>
                    
                </nav>
            </div>
        </div>
        </header>
    )
}

export default Navbar;