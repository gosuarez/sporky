import { useQuery } from "@tanstack/react-query";
import { RecipeQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";


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
      apiClient
        .get<FetchResponse<Recipe>>("/recipes/complexSearch", {
          params: {
            number: 20,
            addRecipeInformation: true,
            type: recipeQuery.type?.id,
            diet: recipeQuery.diet?.id,
            sort: recipeQuery.sort?.id,
            query: recipeQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useRecipes;
