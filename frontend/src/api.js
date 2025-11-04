import axios from 'axios';

// Get the base URL from the environment variable we just created
const API_BASE_URL = process.env.REACT_APP_API_URL;

// Create a function for each API call

// --- Project Calls ---

export const getAllProjects = () => {
    return axios.get(`${https://skillhub-production.up.railway.app/}/api/projects`);
};

export const getProjectById = (id) => {
    return axios.get(`${https://skillhub-production.up.railway.app/}/api/projects/${id}`);
};

export const getCommentsByProjectId = (id) => {
    return axios.get(`${https://skillhub-production.up.railway.app/}/api/projects/${id}/comments`);
};

export const submitProject = (projectData) => {
    return axios.post(`${https://skillhub-production.up.railway.app/}/api/projects`, projectData);
};

// --- User Calls ---

export const saveProfile = (profileData) => {
    return axios.post(`${https://skillhub-production.up.railway.app/}/api/profile`, profileData);
};

export const login = (authData) => {
    return axios.post(`${https://skillhub-production.up.railway.app/}/api/login`, authData);
};

export const signup = (authData) => {
    return axios.post(`${https://skillhub-production.up.railway.app/}/api/signup`, authData);
};

// You can add more functions here, like your 'getUsers' example
export const getUsers = () => {
  return axios.get(`${https://skillhub-production.up.railway.app/}/api/users`);
};
