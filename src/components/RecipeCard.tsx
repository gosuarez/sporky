import { Recipe } from "../hooks/useRecipes";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import RecipeIconList from "./RecipeIconList";
import HealthScore from "./HealthScore";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize="2xl">{recipe.title}</Heading>
        <HStack justifyContent="space-between">
          <RecipeIconList
            readyInMinutes={recipe.readyInMinutes}
            servings={recipe.servings}
          />
          <HealthScore score={recipe.healthScore} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
