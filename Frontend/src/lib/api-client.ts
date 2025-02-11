import axios from 'axios';

// Determine the base URL based on the environment
const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_BACKEND_URL || 'https://budget-tool-backend-fkfbg9bjbncvd5hb.uksouth.1.azurewebsites.net'
  : import.meta.env.VITE_BACKEND_URL || 'https://localhost:5001';

// Create axios instance with configuration
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for CORS with credentials
});

// Add a request interceptor for handling auth tokens if needed
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here later
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error cases here
    if (error.response?.status === 401) {
      // Handle unauthorized
      console.error('Unauthorized request:', error);
    } else if (error.response?.status === 403) {
      // Handle forbidden
      console.error('Forbidden request:', error);
    } else if (error.response?.status === 404) {
      // Handle not found
      console.error('Resource not found:', error);
    } else {
      // Handle other errors
      console.error('API request failed:', error);
    }
    return Promise.reject(error);
  }
);

export default apiClient; 