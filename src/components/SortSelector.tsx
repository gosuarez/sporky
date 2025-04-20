import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useSort from "../hooks/useSort";
import { Sort } from "../data/sorts";
import { getById } from "../utils/getById";

interface Props {
  onSelectSortOrder: (sortOrder: Sort) => void;
  selectedOrderId?: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrderId }: Props) => {
  const sorts = useSort();
  const selectedOrder = getById(sorts, selectedOrderId);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        paddingX={{ base: 2.5, md: 5 }}
        paddingY={{ base: 1.5, md: 2.5 }}
        fontSize={{ base: "xs", sm: "sm", md: "md" }}
      >
        Order by: {selectedOrder?.label || "Relevance"}
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
