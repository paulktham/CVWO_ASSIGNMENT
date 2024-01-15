import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// TODO: add the request interceptor
export default client;
