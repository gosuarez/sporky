import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/gastrolab.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex
      direction="column"
      padding="10px"
      paddingY="20px"
      gap={{ base: 3, md: 0 }}
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        width="100%"
        wrap="wrap"
        gap={4}
      >
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <HStack spacing={2} flexShrink={0}>
            <Image src={logo} boxSize="50px" />
            <Text
              fontSize={{ base: "lg", sm: "2xl" }}
              fontWeight="extrabold"
              fontFamily="cursive"
            >
              GastroLab
            </Text>
          </HStack>
        </Link>
        <Box flex="1" display={{ base: "none", md: "block" }}>
          <SearchInput onSearch={onSearch} />
        </Box>
        <Box flexShrink={0}>
          <ColorModeSwitch />
        </Box>
      </Flex>
      <Box display={{ base: "block", md: "none" }}>
        <SearchInput onSearch={onSearch} />
      </Box>
    </Flex>
  );
};

export default NavBar;
