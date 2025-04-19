import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import DietSelector from "./components/DietSelector";
import MealTypeList from "./components/MealTypeList";
import NavBar from "./components/NavBar";
import RecipeGrid from "./components/RecipeGrid";
import RecipeHeading from "./components/RecipeHeading";
import SortSelector from "./components/SortSelector";

export interface RecipeQuery {
  typeId?: string;
  dietId?: string;
  sortId?: string;
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
            selectedMealTypeId={recipeQuery.typeId}
            onSelectMeal={(type) =>
              setRecipeQuery({ ...recipeQuery, typeId: type.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <RecipeHeading recipeQuery={recipeQuery} />
          <HStack spacing={2} marginBottom={4}>
            <DietSelector
              selectedDietId={recipeQuery.dietId}
              onSelectDiet={(diet) =>
                setRecipeQuery({ ...recipeQuery, dietId: diet.id })
              }
            />
            <SortSelector
              selectedOrderId={recipeQuery.sortId}
              onSelectSortOrder={(sort) =>
                setRecipeQuery({ ...recipeQuery, sortId: sort.id })
              }
            />
          </HStack>
        </Box>
        <RecipeGrid recipeQuery={recipeQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
