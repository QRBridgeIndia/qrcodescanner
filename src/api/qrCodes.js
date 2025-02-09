// src/api/qrCodes.js
import apiClient from './apiClient';

// Fetch list of QR codes
export const fetchQRCodes = async () => {
  try {
    const response = await apiClient.get('/qrcodes/');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create a new QR code
export const createQRCode = async (data) => {
  try {
    const response = await apiClient.post('/qrcodes/', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
