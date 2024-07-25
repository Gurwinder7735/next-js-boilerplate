// import { setCookie } from "cookies-next";

import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const maxRetries = 4;
let retries = 0;

// You can define the token and API_URL here
const token: string = ""; // Update with your actual token

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosApi.defaults.headers.common["Authorization"] = token;

// Add a request interceptor to dynamically change the base URL
axiosApi.interceptors.request.use(
  (config) => {
    if (config.url?.startsWith("/api/chat")) {
      // Change the base URL for this request
      config.baseURL = process.env.NEXT_PUBLIC_CHAT_API_BASE_URL;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can add your custom response handling logic here
    // For example, you can log the response or perform some actions
    // before returning it

    return response;
  },
  (error: any) => {
    // Handle errors here if needed
    if (error?.response?.status == 401) {
    }

    if (error.code === "ECONNRESET" && retries < maxRetries) {
      retries++;

      return axiosApi(error.config); // Retry the request
    }

    return Promise.reject(error);
  }
);

export async function get<T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return await axiosApi
    .get<T>(url, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}

export async function post<T>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi
    .post<T>(url, { ...data }, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}
export async function postImage<T>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi
    .post<T>(url, data, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}

export async function put<T>(
  url: string,
  data: any,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi
    .put<T>(url, { ...data }, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}

export async function del<T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return await axiosApi
    .delete<T>(url, { ...config })
    .then((response: AxiosResponse<T>) => response?.data);
}
