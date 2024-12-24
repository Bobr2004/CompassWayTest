import axios from "axios";

const username = "front9778";
const password = "custompass1";

const API = axios.create({
   baseURL: "http://68.183.74.14:4005/api/",
   headers: {
      Authorization: "Basic " + btoa(`${username}:${password}`)
   }
});

export { API };
