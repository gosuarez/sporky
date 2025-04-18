import { useInfiniteQuery } from "@tanstack/react-query";
import { RecipeQuery } from "../App";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient<Recipe>("/recipes/complexSearch");
const PAGE_SIZE = 20;
const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

const useRecipes = (recipeQuery: RecipeQuery) =>
  useInfiniteQuery<FetchResponse<Recipe>, Error>({
    queryKey: ["recipes", recipeQuery],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      apiClient.getAll({
        params: {
          number: PAGE_SIZE,
          offset: pageParam,
          addRecipeInformation: true,
          type: recipeQuery.type?.id,
          diet: recipeQuery.diet?.id,
          sort: recipeQuery.sort?.id,
          query: recipeQuery.searchText,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.reduce(
        (sum, page) => sum + page.results.length,
        0
      );

      return totalFetched < lastPage.totalResults ? totalFetched : undefined;
    },
    staleTime: DAY,
  });

export default useRecipes;
