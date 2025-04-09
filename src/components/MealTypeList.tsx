import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useMealTypes, { MealType } from "../hooks/useMealTypes";

interface Props {
  onSelectMeal: (type: MealType) => void;
  selectedMealType: MealType | null;
}

const MealTypeList = ({ selectedMealType, onSelectMeal }: Props) => {
  const mealTypes = useMealTypes();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Meals</Heading>
      <List>
        {mealTypes.map((type) => (
          <ListItem key={type.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="42px"
                objectFit="cover"
                borderRadius={8}
                src={type.image}
              ></Image>
              <Button
                fontWeight={
                  type.id === selectedMealType?.id ? "bold" : "normal"
                }
                onClick={() => onSelectMeal(type)}
                fontSize="lg"
                variant="link"
              >
                {type.label}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MealTypeList;
