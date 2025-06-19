import { Link, useNavigate } from "react-router";
import { FilePlus2, LogInIcon, UserPlusIcon, BookOpen } from "lucide-react";
import api from "../lib/axios";
import { useState, useEffect } from "react";   

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUser = async () => {
            // Check if token exists in localStorage first
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null);
                return;
            }
            
            try {
                const response = await api.get("/users/profile");
                console.log("User profile response:", response.data);
                setUser(response.data);
            } catch (error) {
                console.log("User not authenticated or error fetching user:", error);
                // Clear invalid token
                localStorage.removeItem("token");
                setUser(null);
            }
        }
        
        // Initial fetch
        fetchUser();
        
        // Listen for login event
        const handleUserLogin = () => {
            fetchUser();
        };
        
        window.addEventListener('userLoggedIn', handleUserLogin);
        
        // Cleanup event listener
        return () => {
            window.removeEventListener('userLoggedIn', handleUserLogin);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await api.post("/users/logout");
            // Remove token from localStorage
            localStorage.removeItem("token");
            setUser(null);
            // Redirect to login page
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error);
            // Even if the API call fails, remove the token and redirect
            localStorage.removeItem("token");
            setUser(null);
            navigate("/login");
        }
    };

    return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link className="btn btn-ghost text-xl" to={user ? "/dashboard" : "/"}>
                <span className="bg-gradient-to-r from-accent via-accent-focus to-primary bg-clip-text text-transparent">Notes App</span>
                </Link>
                <nav className="flex items-center gap-2">
                    {/* Show login/register buttons only when user is not logged in */}
                    {!user && (
                        <>
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
                        </>
                    )}

                    <div className="flex items-center gap-2">
                    {user && (
                        <>
                            <Link className="btn btn-primary btn-outline " to="/create">
                                <FilePlus2 className="size-4 font-bold mr-2" />
                                <span className="hidden md:inline ">Create Note</span>
                            </Link>
                            <Link className="btn btn-ghost" to="/dashboard">
                                <BookOpen className="size-4 font-bold mr-2" />
                                <span className="hidden md:inline ">Dashboard</span>
                            </Link>
                        </>
                    )}
                    {user && (
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                              {/* Show user's first letter when logged in */}
                              {user.name ? (
                                <span className="">{user.name.charAt(0).toUpperCase()}</span>
                              ) : (
                                <span className=""></span>
                              )}
                            </div>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                              <button onClick={handleLogout} className="btn btn-primary btn-outline w-full">
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                    )}
                    </div>
                    
                </nav>
            </div>
        </div>
        </header>
    )
}

export default Navbar;