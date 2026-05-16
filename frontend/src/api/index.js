import axios from 'axios';

// We are putting the link directly here to avoid Environment Variable issues
const RENDER_BACKEND_URL = "https://personal-data-twin-api.onrender.com/api";

const API = axios.create({ 
  baseURL: RENDER_BACKEND_URL 
});

export const dataAPI = {
  getSummary: () => API.get('/analytics/summary'),
  getEntries: () => API.get('/entries'),
  createEntry: (data) => API.post('/entries', data),
  simulate: (data) => API.post('/simulate', data),
};
