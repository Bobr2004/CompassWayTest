import axios from "axios";

// const username = "akag2ami123";
// const password = "akagamioo2";

const API = axios.create({
   baseURL: "http://68.183.74.14:4005/api/"
});

export { API };
