import {
  HStack,
  Image,
  List,
  ListItem,
  useColorModeValue,
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
  const mealLabelColor = useColorModeValue("#2e2a27", "#e9e4d2");

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Meals
      </Heading>
      <List>
        {mealTypes.map((type) => {
          const isSelected = type.id === selectedMealType?.id;

          return (
            <ListItem key={type.id} paddingY="5px">
              <HStack
                cursor="pointer"
                onClick={() => onSelectMeal(type)}
                spacing={3}
              >
                <Image
                  boxSize="42px"
                  objectFit="cover"
                  borderRadius={8}
                  src={type.image}
                  boxShadow={`0 0 0 2px ${mealLabelColor}`}
                  transition="transform 0.2s ease, box-shadow 0.2s ease"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
                <Button
                  fontWeight={isSelected ? "bold" : "normal"}
                  fontSize="lg"
                  variant="link"
                  color={mealLabelColor}
                  onClick={() => onSelectMeal(type)}
                >
                  {type.label}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default MealTypeList;
