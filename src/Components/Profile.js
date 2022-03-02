import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="400xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years Of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Frontend Developer
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt="">
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiAndroid} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Android App
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiWebplatform} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              WebApps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
