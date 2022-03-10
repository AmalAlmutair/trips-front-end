import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.150.93:8000",
});

export default instance;
