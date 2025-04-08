import { RecipeQuery } from "../App";
import useData from "./useData";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

const useRecipes = (
  recipeQuery: RecipeQuery
) =>
  useData<Recipe>(
    "/recipes/complexSearch",
    {
      params: {
        number: 20,
        sort: "random",
        addRecipeInformation: true,
        type: recipeQuery.type?.id,
        diet: recipeQuery.diet?.id,
      },
    },
    [recipeQuery]
  );

export default useRecipes;
