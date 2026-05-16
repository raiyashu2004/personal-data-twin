import axios from 'axios';

// Vite requires the "VITE_" prefix to see the variable!
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const API = axios.create({ 
  baseURL: API_BASE 
});

export const dataAPI = {
  getSummary: () => API.get('/analytics/summary'),
  getEntries: () => API.get('/entries'),
  createEntry: (data) => API.post('/entries', data),
  simulate: (data) => API.post('/simulate', data),
};
