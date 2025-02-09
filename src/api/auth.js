// src/api/auth.js
import apiClient from "./apiClient";

export const login = async (phone) => {
  try {
    const response = await apiClient.post("/login/", { phone });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const verifyOtp = async (phone, otp) => {
  try {
    const response = await apiClient.post("/verify-otp/", { phone, otp });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
