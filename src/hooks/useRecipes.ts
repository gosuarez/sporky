import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  cheap: boolean;
  servings: number;
}

interface FetchRecipesResponse {
  number: number;
  results: Recipe[];
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchRecipesResponse>("/recipes/complexSearch", {
        params: {
          number: 20,
          sort: "random",
          addRecipeInformation: true,
        },
        signal: controller.signal,
      })
      .then((res) => setRecipes(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { recipes, error };
};

export default useRecipes;
