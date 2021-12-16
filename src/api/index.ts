import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5262/",
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default axiosInstance;