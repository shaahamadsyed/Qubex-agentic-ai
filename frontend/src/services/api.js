// import axios from 'axios';

// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
// });

// // Add a request interceptor to add the auth token to headers
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "https://qubex-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
