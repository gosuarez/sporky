import { Heading } from "@chakra-ui/react";
import { RecipeQuery } from "../App";

interface Props {
  recipeQuery: RecipeQuery;
}

const RecipeHeading = ({ recipeQuery }: Props) => {
  const heading = `${recipeQuery.diet?.label || ""} ${
    recipeQuery.type?.label || ""
  } Recipes`;

  return (
    <Heading as="h1" marginBottom={5} fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
      {heading}
    </Heading>
  );
};

export default RecipeHeading;
