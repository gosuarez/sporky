import useData from "./useData";
import { MealType } from "./useMealTypes";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

const useRecipes = (selectedMealType: MealType | null) =>
  useData<Recipe>(
    "/recipes/complexSearch",
    {
      params: {
        number: 20,
        sort: "random",
        addRecipeInformation: true,
        type: selectedMealType?.id,
      },
    },
    [selectedMealType?.id]
  );

export default useRecipes;
