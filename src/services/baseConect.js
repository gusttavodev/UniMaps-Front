import axios from "axios";

const baseConect = axios.create({
  baseURL: "https://login-back-gads.herokuapp.com"
});

export default baseConect;
