import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      {/* <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
        zIndex="-1"
      /> */}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi I'm
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400,blue.500, purple.600)"
            bgClip="text"
          >
            Yohanes
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("google.com")}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="\images\yohanes-profile-2.png"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
