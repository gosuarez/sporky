import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getNextApiKey } from "./apiKeyManager";

export interface FetchResponse<T> {
  number: number;
  results: T[];
}

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com/",
});

// Request interceptor: attach the API key dynamically
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!config.params) config.params = {};
  config.params.apiKey = getNextApiKey();
  return config;
});

// Response interceptor: retry with another key on rate-limit (402 or 429)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 402 || error.response?.status === 429) &&
      originalRequest._retry !== true
    ) {
      originalRequest._retry = true;
      originalRequest.params.apiKey = getNextApiKey();
      return axiosInstance(originalRequest); // retry once
    }

    return Promise.reject(error);
  }
);

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
