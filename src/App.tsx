import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecipeGrid from "./components/RecipeGrid";
import MealTypeList from "./components/MealTypeList";
import { useState } from "react";
import { MealType } from "./hooks/useMealTypes";

function App() {
  const [selectedMealType, setSelectedMealType] = useState<MealType | null>(null);

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
          <MealTypeList selectedMealType={selectedMealType} onSelectMeal={(type) => setSelectedMealType(type)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <RecipeGrid selectedMealType={selectedMealType} />
      </GridItem>
    </Grid>
  );
}

export default App;
