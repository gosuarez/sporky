import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecipeGrid from "./components/RecipeGrid";
import MealTypeList from "./components/MealTypeList";
import { useState } from "react";
import { MealType } from "./hooks/useMealTypes";
import DietSelector from "./components/DietSelector";
import { Diet } from "./hooks/useDiets";

export interface RecipeQuery {
  type: MealType | null;
  diet: Diet | null;
}

function App() {
  const [recipeQuery, setRecipeQuery] = useState<RecipeQuery>(
    {} as RecipeQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <MealTypeList
            selectedMealType={recipeQuery.type}
            onSelectMeal={(type) => setRecipeQuery({ ...recipeQuery, type })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <DietSelector
          selectedDiet={recipeQuery.diet}
          onSelectDiet={(diet) => setRecipeQuery({ ...recipeQuery, diet })}
        />
        <RecipeGrid recipeQuery={recipeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
