import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Box py="16px" mx="241px" maxH="100px">
        <HStack>
          <Heading size="md" fontWeight="semibold" color="cyan.400">
            Yohanes Silitonga
          </Heading>
          <Spacer></Spacer>
          <IconButton
            icon={<FaLinkedin />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={2}
            icon={<FaInstagram />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={2}
            icon={<FaGithub />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={2}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </HStack>
      </Box>
      <VStack mx="200px">
        <Header></Header>
        <Social></Social>
        {/* <Profile></Profile> */}
      </VStack>
    </Box>
  );
};

export default App;
