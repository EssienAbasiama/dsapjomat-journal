import axios from "axios";

import { decryptData, refreshAccessToken } from "./authUtils";
import { APIURL } from "../constants";

// Create an axios instance
export const apiClient = axios.create({
  baseURL: APIURL,
  withCredentials: true, // Send cookies with requests
});

// Set Authorization header from localStorage
const authToken = localStorage.getItem("authToken");
if (authToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${decryptData(
    authToken
  )}`;
}

// Add a response interceptor for automatic token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to unauthorized access
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newToken = await refreshAccessToken();
      if (newToken) {
        apiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
