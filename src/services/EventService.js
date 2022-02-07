/*eslint-disable */
import axios from "axios";
// const url = "/events";

const apiCall = axios.create({
  baseURL: "https://my-json-server.typicode.com/Arigatouz/real-world-app-vueui",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiCall;
  },
};
