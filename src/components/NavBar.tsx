import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/gastrolab.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" alignItems="center">
      <HStack spacing={2}>
        <Image src={logo} boxSize="60px" />
        <Text fontSize="24px" fontWeight="extrabold" fontFamily="cursive">
          GastroLab
        </Text>
      </HStack>
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
