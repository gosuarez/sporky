import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaClock, FaUtensils } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IconType } from "react-icons";

interface Props {
  readyInMinutes: number;
  cheap: boolean;
  servings: number;
}

const RecipeIconList = ({ readyInMinutes, cheap, servings }: Props) => {
  const items: { icon: IconType; label: string }[] = [
    { icon: FaClock, label: `${readyInMinutes} min` },
    { icon: FaUtensils, label: `${servings} servings` },
    { icon: FaSackDollar, label: cheap ? "$" : "$$$" },
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
