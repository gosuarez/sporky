import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaClock, FaUtensils } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  readyInMinutes: number;
  servings: number;
}

const RecipeIconList = ({ readyInMinutes, servings }: Props) => {
  const items: { icon: IconType; label: string }[] = [
    { icon: FaClock, label: `${readyInMinutes} min` },
    { icon: FaUtensils, label: `${servings} servings` },
  ];

  return (
    <HStack spacing={4} marginY={2} wrap="wrap">
      {items.map(({ icon, label }, index) => (
        <HStack spacing={1} key={index}>
          <Icon as={icon} color="gray.500" />
          <Text fontSize="sm">{label}</Text>
        </HStack>
      ))}
    </HStack>
  );
};

export default RecipeIconList;
