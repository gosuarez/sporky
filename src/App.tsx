import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RecipeGrid from "./components/RecipeGrid";
import MealTypeList from "./components/MealTypeList";
import { useState } from "react";
import { MealType } from "./hooks/useMealTypes";
import DietSelector from "./components/DietSelector";
import { Diet } from "./hooks/useDiets";
import SortSelector from "./components/SortSelector";
import { Sort } from "./hooks/useSort";

export interface RecipeQuery {
  type: MealType | null;
  diet: Diet | null;
  sort: Sort | null;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) =>
            setRecipeQuery({ ...recipeQuery, searchText })
          }
        />
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
        <HStack spacing={2} paddingLeft={2} marginBottom={4}>
          <DietSelector
            selectedDiet={recipeQuery.diet}
            onSelectDiet={(diet) => setRecipeQuery({ ...recipeQuery, diet })}
          />
          <SortSelector
            selectedOrder={recipeQuery.sort}
            onSelectSortOrder={(sort) =>
              setRecipeQuery({ ...recipeQuery, sort })
            }
          />
        </HStack>
        <RecipeGrid recipeQuery={recipeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
