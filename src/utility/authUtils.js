import axios from "axios";
import CryptoJS from "crypto-js";
import { APIURL, ENCRYPTIONKEY } from "../constants";
import apiClient from "./apiClient";

// Encryption key for securing tokens (store securely, not hard-coded)
const encryptionKey = ENCRYPTIONKEY || "default_encryption_key";

/**
 * Encrypts data before storing it
 * @param {string} data - The data to encrypt
 * @returns {string} - Encrypted string
 */
const encryptData = (data) =>
  CryptoJS.AES.encrypt(data, encryptionKey).toString();

/**
 * Decrypts data after retrieving it
 * @param {string} encryptedData - The encrypted data
 * @returns {string|null} - Decrypted string or null if decryption fails
 */
export const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
};

/**
 * Logs in the user, encrypts, and stores the token securely
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<{ user: object, token: string }>}
 */
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });

    if (response.status === 200) {
      const { token, expiresAt, user } = response.data;

      // Encrypt and save token and expiry
      localStorage.setItem("authToken", encryptData(token));
      localStorage.setItem("tokenExpiry", encryptData(expiresAt.toString()));

      return { user, token };
    }
  } catch (error) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Login failed.");
  }
};

/**
 * Checks if the user is authenticated by verifying token expiry
 * @returns {boolean} - True if authenticated, false otherwise
 */
export const isAuthenticated = async () => {
  const encryptedToken = localStorage.getItem("authToken");
  const encryptedExpiry = localStorage.getItem("tokenExpiry");

  if (encryptedToken && encryptedExpiry) {
    const token = decryptData(encryptedToken);
    const expiry = decryptData(encryptedExpiry);

    if (token && expiry) {
      const currentTime = Date.now();
      if (currentTime < Number(expiry)) {
        return true;
      } else {
        // Token expired, attempt to refresh
        const newToken = await refreshAccessToken();
        return !!newToken; // Return true if token is refreshed
      }
    }
  }

  return false;
};

/**
 * Logs out the user by clearing localStorage
 */
export const logoutUser = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiry");
};

/**
 * Refreshes the access token using the refresh token (if implemented server-side)
 * @returns {Promise<string|null>} - New access token or null if refresh fails
 */
export const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      `${APIURL}/auth/refresh`,
      {},
      { withCredentials: true }
    );

    if (response.status === 200) {
      const { token, expiresAt } = response.data;

      // Encrypt and save the new token and expiry
      localStorage.setItem("authToken", encryptData(token));
      localStorage.setItem("tokenExpiry", encryptData(expiresAt.toString()));

      return token;
    }
  } catch (error) {
    console.error(
      "Token refresh error:",
      error.response?.data?.message || error.message
    );
    return null;
  }
};
