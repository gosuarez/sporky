import { Heading } from "@chakra-ui/react";
import { RecipeQuery } from "../App";
import { getById } from "../utils/getById";
import { allDiets } from "../data/diets";
import { allMealTypes } from "../data/mealTypes";

interface Props {
  recipeQuery: RecipeQuery;
}

const RecipeHeading = ({ recipeQuery }: Props) => {
const selectedDiet = getById(allDiets, recipeQuery.dietId);
const type = getById(allMealTypes, recipeQuery.typeId);

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
