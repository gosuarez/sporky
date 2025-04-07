import { Recipe } from "../hooks/useRecipes";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import RecipeIconList from "./RecipeIconList";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={recipe.image} />
      <CardBody>
        <Heading fontSize="2xl">{recipe.title}</Heading>
        <RecipeIconList
          readyInMinutes={recipe.readyInMinutes}
          cheap={recipe.cheap}
          servings={recipe.servings}
        />
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
