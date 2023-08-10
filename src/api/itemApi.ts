import axios, { AxiosInstance } from "axios";

const itemApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:5063/api/Items/",
  headers: {
    "Content-type": "application/json",
  },
});

export default itemApi;