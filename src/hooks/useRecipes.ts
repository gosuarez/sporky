import useData from "./useData";
import { Diet } from "./useDiets";
import { MealType } from "./useMealTypes";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  healthScore: number;
}

const useRecipes = (
  selectedMealType: MealType | null,
  selectedDiet: Diet | null
) =>
  useData<Recipe>(
    "/recipes/complexSearch",
    {
      params: {
        number: 20,
        sort: "random",
        addRecipeInformation: true,
        type: selectedMealType?.id,
        diet: selectedDiet?.id,
      },
    },
    [selectedMealType?.id, selectedDiet?.id]
  );

export default useRecipes;
