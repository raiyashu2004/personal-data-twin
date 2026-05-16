import axios from 'axios';

// This connects to your Spring Boot server
const API = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export const dataAPI = {
  getSummary: () => API.get('/analytics/summary'),
  getEntries: () => API.get('/entries'),
  createEntry: (data) => API.post('/entries', data),
  simulate: (data) => API.post('/simulate', data),
};