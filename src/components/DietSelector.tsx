import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useDiets from "../hooks/useDiets";

const DietSelector = () => {
  const diets = useDiets();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Diets
      </MenuButton>
      <MenuList>
        {diets.map((diet) => (
          <MenuItem key={diet.id}>{diet.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DietSelector;
