import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useDiets, { Diet } from "../hooks/useDiets";

interface Props {
  onSelectDiet: (diet: Diet) => void;
  selectedDiet: Diet | null;
}

const DietSelector = ({ onSelectDiet, selectedDiet }: Props) => {
  const diets = useDiets();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
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
