import axios from "axios";
import { handleError } from "../libs/common";

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

approve.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    handleError(error.response.data.message);
    return Promise.reject(error);
  }
);

export default instance;