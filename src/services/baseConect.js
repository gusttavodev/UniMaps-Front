import axios from "axios";

const baseConect = axios.create({
  baseURL: "http://localhost:8000"
});

export default baseConect;
