import axios from "axios";
export const baseUrl = "http://192.168.100.194:8000";
export const instance = axios.create({
  baseURL: `${baseUrl}/`,
});
