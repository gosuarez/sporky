import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Diet } from "../data/diets";
import useDiets from "../hooks/useDiets";
import { getById } from "../utils/getById";

interface Props {
  onSelectDiet: (diet: Diet) => void;
  selectedDietId?: string;
}

const DietSelector = ({ onSelectDiet, selectedDietId }: Props) => {
  const diets = useDiets();
  const selectedDiet = getById(diets, selectedDietId);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        paddingX={{ base: 2.5, md: 5 }}
        paddingY={{ base: 1.5, md: 2.5 }}
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
      >
        {selectedDiet?.label || "Diets"}
      </MenuButton>
      <MenuList>
        {diets.map((diet) => (
          <MenuItem onClick={() => onSelectDiet(diet)} key={diet.id}>
            {diet.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DietSelector;
