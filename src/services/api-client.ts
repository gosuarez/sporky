import axios from "axios";

export default axios.create({
  baseURL: "https://api.spoonacular.com/",
  params: {
    apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
  },
});
