import { SimpleGrid, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import RecipeCardContainer from "./RecipeCardContainer";
import { MealType } from "../hooks/useMealTypes";
import { Diet } from "../hooks/useDiets";

interface Props {
  selectedMealType: MealType | null;
  selectedDiet: Diet | null;
}

const RecipeGrid = ({ selectedMealType, selectedDiet }: Props) => {
  const { data, error, isLoading } = useRecipes(selectedMealType, selectedDiet);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* //TODO: Improve the response if api requests have reached 0 */}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <RecipeCardContainer key={skeleton}>
              <RecipeCardSkeleton />
            </RecipeCardContainer>
          ))}
        {data.map((recipe) => (
          <RecipeCardContainer key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </RecipeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
