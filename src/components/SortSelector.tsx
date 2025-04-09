import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useSort from "../hooks/useSort";

const SortSelector = () => {
  const sorts = useSort();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:
      </MenuButton>
      <MenuList>
        {sorts.map((sort) => (
          <MenuItem key={sort.id}>{sort.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
