import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface FetchResponse<T> {
  number: number;
  results: T[];
}

// Load all API keys from environment variables
const API_KEYS = [
  import.meta.env.VITE_SPOONACULAR_API_KEY_1,
  import.meta.env.VITE_SPOONACULAR_API_KEY_2,
  import.meta.env.VITE_SPOONACULAR_API_KEY_3,
  import.meta.env.VITE_SPOONACULAR_API_KEY_4,
].filter(Boolean); // in case some are undefined

if (API_KEYS.length === 0) {
  throw new Error("No Spoonacular API keys found in environment variables.");
}

let keyIndex = 0;

// A function to get the next key in round-robin style
function getNextApiKey() {
  const key = API_KEYS[keyIndex];
  keyIndex = (keyIndex + 1) % API_KEYS.length;
  return key;
}

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com/",
});

// Request interceptor: attach the API key dynamically
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (!config.params) config.params = {};
  config.params.apiKey = getNextApiKey();
  return config;
});

// Response interceptor: retry with another key on rate-limit (402 or 429)
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 402 || error.response?.status === 429) &&
      originalRequest._retry !== true
    ) {
      originalRequest._retry = true;
      originalRequest.params.apiKey = getNextApiKey();
      return apiClient(originalRequest); // retry once
    }

    return Promise.reject(error);
  }
);

export default apiClient;
