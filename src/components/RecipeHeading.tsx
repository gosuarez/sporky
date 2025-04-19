import { Heading } from "@chakra-ui/react";
import { RecipeQuery } from "../App";
import useMealTypes from "../hooks/useMealTypes";
import useDiets from "../hooks/useDiets";

interface Props {
  recipeQuery: RecipeQuery;
}

const RecipeHeading = ({ recipeQuery }: Props) => {
  const types = useMealTypes();
  const type = types?.find((t) => t.id === recipeQuery.typeId);

  const diets = useDiets();
  const selectedDiet = diets?.find((d) => d.id === recipeQuery.dietId);

  const heading = `${selectedDiet?.label || ""} ${type?.label || ""} Recipes`;

  return (
    <Heading
      as="h1"
      marginBottom={5}
      fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
    >
      {heading}
    </Heading>
  );
};

export default RecipeHeading;
