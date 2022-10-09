import axios from "axios";

const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      "Content-type": "application/json",
    },
});

export default instance;