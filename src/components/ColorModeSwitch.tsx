import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Icon as={FaSun} color="gray.500" />
      <Switch
        colorScheme="yellow"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={FaMoon} color="gray.500" />
    </HStack>
  );
};

export default ColorModeSwitch;
