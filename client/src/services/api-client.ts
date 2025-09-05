import axios from "axios";

const API_URL = "http://localhost:9000/api/v1" ;

// const API_URL = import.meta.env.API_URL || "";

console.log("API_URL:", API_URL);

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Send Cookies with every request
})

export default apiClient;