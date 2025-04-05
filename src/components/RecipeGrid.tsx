import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Recipe {
  id: number;
  title: string;
}

interface FetchRecipesResponse {
  number: number;
  results: Recipe[];
}

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchRecipesResponse>("/recipes/complexSearch", {
        params: {
          number: 20,
          sort: "random",
        },
      })
      .then((res) => setRecipes(res.data.results))
      .catch((err) => setError(err.message));
  }, []); 

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </>
  );
};

export default RecipeGrid;
