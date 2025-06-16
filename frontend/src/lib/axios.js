import axios from "axios";

// Create a new axios instance
const api = axios.create({
    baseURL: "http://localhost:2121/api",
});

export default api;