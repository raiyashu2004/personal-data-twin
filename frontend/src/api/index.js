import axios from 'axios';

// This checks if we are on the internet (production) or local (development)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const API = axios.create({ 
  baseURL: API_BASE_URL 
});

export const dataAPI = {
  getSummary: () => API.get('/analytics/summary'),
  getEntries: () => API.get('/entries'),
  createEntry: (data) => API.post('/entries', data),
  simulate: (data) => API.post('/simulate', data),
};