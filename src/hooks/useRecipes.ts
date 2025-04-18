import { useQuery } from "@tanstack/react-query";
import { RecipeQuery } from "../App";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient<Recipe>("/recipes/complexSearch");

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

const useRecipes = (recipeQuery: RecipeQuery) =>
  useQuery<FetchResponse<Recipe>, Error>({
    queryKey: ["recipes", recipeQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          number: 20,
          addRecipeInformation: true,
          type: recipeQuery.type?.id,
          diet: recipeQuery.diet?.id,
          sort: recipeQuery.sort?.id,
          query: recipeQuery.searchText,
        },
      }),
  });

export default useRecipes;
