import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useSort, { Sort } from "../hooks/useSort";

interface Props {
  onSelectSortOrder: (sortOrder: Sort) => void;
  selectedOrder: Sort | null;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sorts = useSort();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrder?.label || "Category"}
      </MenuButton>
      <MenuList>
        {sorts.map((sort) => (
          <MenuItem onClick={() => onSelectSortOrder(sort)} key={sort.id}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
