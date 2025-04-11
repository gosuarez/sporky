import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import LogoIcon from "../assets/logo.svg?react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const logoColor = useColorModeValue("#2e2a27", "#e9e4d2");

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
          <Box height="55px" width="auto" color={logoColor}>
            <LogoIcon style={{ height: "100%", width: "auto" }} />
          </Box>
        </Link>

        <Box flex="1" display={{ base: "none", md: "block" }}>
          <SearchInput onSearch={onSearch} />
        </Box>

        <Box flexShrink={0}>
          <ColorModeSwitch />
        </Box>
      </Flex>
      <Box marginTop={3} display={{ base: "block", md: "none" }}>
        <SearchInput onSearch={onSearch} />
      </Box>
    </Flex>
  );
};

export default NavBar;
