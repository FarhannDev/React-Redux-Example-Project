import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com";

export default axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
