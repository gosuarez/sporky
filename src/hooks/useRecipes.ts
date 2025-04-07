import useData from "./useData";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

const useRecipes = () =>
  useData<Recipe>("/recipes/complexSearch", {
    number: 20,
    sort: "random",
    addRecipeInformation: true,
  });

export default useRecipes;
