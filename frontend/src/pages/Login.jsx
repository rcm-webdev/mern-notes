import { LogInIcon, NotebookIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../lib/axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const {email, password} = formData;
    
    const navigate = useNavigate();

    // Check if user is already logged in
    useEffect(() => {
        const checkAuth = async () => {
            // Check if token exists in localStorage first
            const token = localStorage.getItem("token");
            if (!token) {
                return; // No token, stay on login page
            }
            
            try {
                const response = await api.get("/users/profile");
                if (response.status === 200) {
                    // User is already logged in, redirect to dashboard
                    navigate("/dashboard");
                }
            } catch (error) {
                // Token is invalid, clear it and stay on login page
                localStorage.removeItem("token");
                console.log("Invalid token, staying on login page");
            }
        };
        
        checkAuth();
    }, [navigate]);

    const onChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await api.post("/users/login", { email, password });
        console.log(response);
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            // Dispatch custom event to notify Navbar to refetch user data
            window.dispatchEvent(new CustomEvent('userLoggedIn'));
            navigate("/dashboard");
        }
    }
    return (
        <main className="max-w-sm mx-auto mt-10 p-8 bg-base-300 border-2 border-base-content/10 rounded-2xl shadow-md">
            <div className="row justify-content-center">
                <section className="col-6 mt-5 space-y-4">
                    {/* Logo */}
                    <div className=" mx-auto w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    <NotebookIcon className="size-15 text-primary"/>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="form-control">
                            <label htmlFor="email" className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered" id="email" placeholder="Enter email" value={email} onChange={onChange} />
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label htmlFor="password" className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered" id="password" placeholder="Enter password" value={password} onChange={onChange} />
                        </div>
                        {/* Submit */}
                        <button type="submit" className="btn btn-primary btn-outline w-full "> 
                            <LogInIcon className="size-4 mr-2"/>
                            Login</button>
                    </form>
                </section>
            </div>
        </main>
    )
}


export default Login;