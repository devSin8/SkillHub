import axios from 'axios';

// ✅ Get the base URL from environment variable (defined in .env)
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://skillhub-production.up.railway.app";

// ✅ Create a reusable axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// --- Project Calls ---

export const getAllProjects = () => {
  return api.get("/api/projects");
};

export const getProjectById = (id) => {
  return api.get(`/api/projects/${id}`);
};

export const getCommentsByProjectId = (id) => {
  return api.get(`/api/projects/${id}/comments`);
};

export const submitProject = (projectData) => {
  return api.post("/api/projects", projectData);
};

// --- User & Auth Calls ---

export const saveProfile = (profileData) => {
  return api.post("/api/profile", profileData);
};

export const login = (authData) => {
  return api.post("/api/auth/login", authData);
};

export const signup = (authData) => {
  return api.post("/api/auth/signup", authData);
};
