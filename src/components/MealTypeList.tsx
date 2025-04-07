import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useMealTypes from "../hooks/useMealTypes";

const MealTypeList = () => {
  const mealTypes = useMealTypes();

  return (
    <List>
      {mealTypes.map((type) => (
        <ListItem key={type.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={type.image}></Image>
            <Text fontSize="lg">{type.label}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default MealTypeList;
