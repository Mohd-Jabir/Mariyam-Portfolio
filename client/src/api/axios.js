import axios from "axios";

const api = axios.create({
  baseURL: "https://mariyam-portfolio-lytb.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
