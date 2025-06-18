import { Link } from "react-router";
import { FilePlus2, LogInIcon, UserPlusIcon } from "lucide-react";
import api from "../lib/axios";
import { useState, useEffect } from "react";   

const Navbar = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            const response = await api.get("/users/profile");
            setUser(response.data);
        }
        fetchUser();
    }, []);
    return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link className="btn btn-ghost text-xl" to="/">
                <span className="bg-gradient-to-r from-accent via-accent-focus to-primary bg-clip-text text-transparent">Notes App</span>
                </Link>
                <nav className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Link className="btn btn-primary btn-outline" to="/login">
                        <LogInIcon className="size-4 font-bold mr-2" />
                           <span className="hidden md:inline ">Login</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link className="btn btn-primary btn-outline" to="/register">
                         <UserPlusIcon className="size-4 font-bold mr-2" />
                           <span className="hidden md:inline ">Register</span>
                        </Link>
                    </div>
                    {/* if user is not logged in, hide the create note button */}

                    <div className="flex items-center gap-2">
                    {user && (
                        <Link className="btn btn-primary btn-outline " to="/create">
                            <FilePlus2 className="size-4 font-bold mr-2" />
                            <span className="hidden md:inline ">Create Note</span>
                        </Link>
                    )}
                    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* if user is logged in, show the user's name (first lettter of name uppercase) */}
          {user ? (
            <span className="text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
          ) : (
            <span className="text-sm font-bold">💀</span>
          )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
                    </div>
                    
                </nav>
            </div>
        </div>
        </header>
    )
}

export default Navbar;