import axios from "axios";
import { API_URL } from "@/config/constants";
import { error } from "console";
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    const mssg = err.response.data?.message || err.message;
    console.error(mssg);
    return Promise.reject(error);
  }
);
