import axios from "axios"

const API = axios.create({ baseURL: import.meta.VITE_DOMAIN_NAME });

export const registerUser = (userData) =>
	API.post("/api/auth/register", userData);
export const loginUser = (userData) => API.post("/api/auth/login", userData);
export const verifyEmail = (token) => API.get(`/api/auth/verify/${token}`);
export const forgotPassword = (email) =>
	API.post("/api/auth/forgot-password", { email });
export const resetPassword = (token, password) =>
	API.post(`/api/auth/reset-password/${token}`, { newPassword: password });
export const githubAuth = () => API.get("/api/auth/github");

export default API;
