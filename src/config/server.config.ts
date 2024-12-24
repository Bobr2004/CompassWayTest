import axios from "axios";

const API = axios.create({
   baseURL: "http://68.183.74.14:4005/api/"
});

export { API };
