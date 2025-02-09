import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '',  // Empty because we're using relative URLs with the Vite proxy
  headers: {
    'Content-Type': 'application/json',
  },
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
    }
    return Promise.reject(error);
  }
); 