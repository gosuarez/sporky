import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

interface FetchRecipesResponse {
  number: number;
  results: Recipe[];
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchRecipesResponse>("/recipes/complexSearch", {
        params: {
          number: 20,
          sort: "random",
          addRecipeInformation: true,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setRecipes(res.data.results);
        //TODO: Move this to the finally state
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        //TODO: Move this to the finally state
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { recipes, error, isLoading };
};

export default useRecipes;
