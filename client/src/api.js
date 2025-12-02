import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-hva.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("usertoken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
