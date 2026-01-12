import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-hva.onrender.com', //http://13.203.67.3:5000 (AWS EC2 - one which i deployed it)

});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("usertoken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
