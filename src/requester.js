import axios from "axios";

export const MyAPI_KEY = "3c2312bf-a75b-4d27-ae92-2d95cb03e0cd";

const API = axios.create({
  baseURL: " https://kinopoiskapiunofficial.tech",
});

API.defaults.headers["X-API-KEY"] = MyAPI_KEY;

export default API;
