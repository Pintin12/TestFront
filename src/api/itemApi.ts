import axios, { AxiosInstance } from "axios";

const itemApi: AxiosInstance = axios.create({
  baseURL: "https://localhost:7007/Items/",
  headers: {
    "Content-type": "application/json; charset=utf-8",
  },
});

export default itemApi;