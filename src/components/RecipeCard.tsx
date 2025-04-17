import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import RecipeIconList from "./RecipeIconList";
import HealthScore from "./HealthScore";
import placeholder from "../assets/no-image-placeholder.webp"
import { Recipe } from "../hooks/useRecipes";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.image} fallbackSrc={placeholder} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <RecipeIconList
            readyInMinutes={recipe.readyInMinutes}
            servings={recipe.servings}
          />
          <HealthScore score={recipe.healthScore} />
        </HStack>
        <Heading fontSize="2xl">{recipe.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
