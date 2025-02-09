import axios from "axios";
import Cookies from "js-cookie";

// Base URL for your API
export const baseURL = "https://api.qrbridge.in";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: baseURL,
  // timeout: 15000, // Optional timeout
});

// Function to set the Authorization token in headers (stored in HttpOnly cookie)
export const setAuthToken = (token) => {
  if (token) {
    // Store the token in a non-HttpOnly cookie
    Cookies.set("authToken", token, {
      expires: 7,
      secure: true, // Ensure cookie is secure in HTTPS connections
    });

    // Set the Authorization header
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Remove the token from the cookie
    Cookies.remove("authToken");

    // Remove the Authorization header
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

// On page load, check if the token is stored in the HttpOnly cookie
const storedToken = Cookies.get("authToken");
if (storedToken) {
  // Set the stored token to the Axios client
  setAuthToken(storedToken);
}

// Interceptor for response errors (for token expiry/invalidation)
apiClient.interceptors.response.use(
  (response) => response, // Simply return the response if everything is fine
  (error) => {
    const { response } = error;

    // Check if the error is a 401 (Unauthorized) error, which is common for expired tokens
    if (response && response.status === 401) {
      // Token might have expired, remove token from cookie
      Cookies.remove("authToken");

      // Redirect to login page (you can use React Router for this)
      window.location.href = "/"; // Or use `useHistory` in hooks
    }

    return Promise.reject(error);
  }
);

export default apiClient;
