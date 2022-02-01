import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex w="100%" px="6" alignSelf="center" maxWidth={1480}>
      <Flex
        as="header"
        bg="gray.800"
        borderRadius={8}
        align="center"
        fontSize="3xl"
        fontWeight="bold"
        justify="center"
        mx="auto"
        w="100%"
      >
        <Logo />
      </Flex>
    </Flex>
  );
}
