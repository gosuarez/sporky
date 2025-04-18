import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { RecipeQuery } from "../App";
import useRecipes from "../hooks/useRecipes";
import ApiErrorFallback from "./ApiErrorFallback";
import RecipeCard from "./RecipeCard";
import RecipeCardContainer from "./RecipeCardContainer";
import RecipeCardSkeleton from "./RecipeCardSkeleton";

interface Props {
  recipeQuery: RecipeQuery;
}

const RecipeGrid = ({ recipeQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useRecipes(recipeQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <ApiErrorFallback />;

  console.log("hasNextPage:", hasNextPage);

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <RecipeCardContainer key={skeleton}>
              <RecipeCardSkeleton />
            </RecipeCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((recipe) => (
              <RecipeCardContainer key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </RecipeCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default RecipeGrid;
