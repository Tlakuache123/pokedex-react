import { Spacer, Button, Center, Text, Flex, Input } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex px="1" py="0.5em" shadow="md">
      <Center px="1">
        <Text fontSize="xl" fontFamily="mono">
          Pokedex
        </Text>
      </Center>
      <Spacer />
      <Input px="1" placeholder="Pokemon's name" size="md" />
      <Spacer />
      <Button bg="white" color="gray.300" p={0} mx="1">
        <MoonIcon w={6} h={6} />
      </Button>
    </Flex>
  );
};

export default Navbar;
