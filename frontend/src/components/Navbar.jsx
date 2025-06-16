import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
    return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link className="btn btn-ghost text-xl" to="/">Notes App</Link>
                <nav>
                    <div className="relative group">
                    <div className="absolute -inset-0 bg-base-300 group-hover:bg-primary rounded-2xl blur transition-all duration-200"></div>
                    <Link className="relative btn border-1 border-base-content/75  " to="/create">
                        <PlusIcon className="size-5 font-bold mr-2" />
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