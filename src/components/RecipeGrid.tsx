import { SimpleGrid, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

const RecipeGrid = () => {
  const { recipes, error, isLoading } = useRecipes();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <RecipeCardSkeleton key={skeleton} />)}
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
