import axios from "axios";

const API = axios.create({
  baseURL: "https://mobile-midwife-ai.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export const analyzeSymptoms = (data) =>
  API.post("/analyze/", data);
