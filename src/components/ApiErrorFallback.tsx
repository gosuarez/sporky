import { Center, Image, Text, VStack, useColorMode } from "@chakra-ui/react";
import errorImage from "../assets/api-limit.svg";

const ApiErrorFallback = () => {
  const { colorMode } = useColorMode();

  return (
    <Center padding={10}>
      <VStack spacing={4}>
        <Image
          src={errorImage}
          maxW="300px"
          alt="API limit reached"
          filter={colorMode === "dark" ? "invert(1)" : "none"}
        />
        <Text fontSize="lg" fontWeight="semibold">
          Oops! We’ve run out of kitchen magic.
        </Text>
        <Text color="gray.500" textAlign="left">
          Our recipe API has hit its daily limit. Please come back tomorrow or
          try again later.
        </Text>
      </VStack>
    </Center>
  );
};

export default ApiErrorFallback;
