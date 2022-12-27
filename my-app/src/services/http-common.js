import axios from "axios";

const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      "Content-Type": "application/json",
    },
});

export const formDataHttp = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_APPROVE_API,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const approve = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_APPROVE_API,
  headers: {
    "Content-Type": "application/json",
  },
});


export default instance;