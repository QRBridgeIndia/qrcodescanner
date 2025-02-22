import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "https://api.qrbridge.in";

const apiClient = axios.create({
  baseURL: baseURL,
});

export const setAuthToken = (token) => {
  if (token) {
    Cookies.set("authToken", token, {
      expires: 7,
      secure: true, 
    });

    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    Cookies.remove("authToken");

    delete apiClient.defaults.headers.common["Authorization"];
  }
};

const storedToken = Cookies.get("authToken");
if (storedToken) {
  setAuthToken(storedToken);
}

apiClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    const { response } = error;

    if (response && response.status === 401) {
      Cookies.remove("authToken");
      window.location.href = "/"; 
    }

    return Promise.reject(error);
  }
);

export default apiClient;
