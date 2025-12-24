import axios from 'axios';

// Ensure this matches your backend URL
const API_URL = 'http://localhost:8000';

export const analyzeSymptoms = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, {
      symptoms: text
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
