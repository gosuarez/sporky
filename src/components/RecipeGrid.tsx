import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import { RecipeQuery } from "../App";
import useRecipes from "../hooks/useRecipes";
import ApiErrorFallback from "./ApiErrorFallback";
import RecipeCard from "./RecipeCard";
import RecipeCardContainer from "./RecipeCardContainer";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  recipeQuery: RecipeQuery;
}

const RecipeGrid = ({ recipeQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useRecipes(recipeQuery);
  const skeletons = Array.from({ length: 12 }, (_, i) => i);

  if (error) return <ApiErrorFallback />;

  const fetchedRecipesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedRecipesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
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
    </InfiniteScroll>
  );
};

export default RecipeGrid;
