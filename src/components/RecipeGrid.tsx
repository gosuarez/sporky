import { SimpleGrid } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import RecipeCardContainer from "./RecipeCardContainer";
import { RecipeQuery } from "../App";
import ApiErrorFallback from "./ApiErrorFallback";

interface Props {
  recipeQuery: RecipeQuery;
}

const RecipeGrid = ({ recipeQuery }: Props) => {
  const { data, error, isLoading } = useRecipes(recipeQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <ApiErrorFallback />;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <RecipeCardContainer key={skeleton}>
            <RecipeCardSkeleton />
          </RecipeCardContainer>
        ))}
      {data?.results.map((recipe) => (
        <RecipeCardContainer key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </RecipeCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default RecipeGrid;
