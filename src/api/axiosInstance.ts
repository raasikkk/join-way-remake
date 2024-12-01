import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Update if using a different base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensure cookies are sent if needed
});

export default axiosInstance;
