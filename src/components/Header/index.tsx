import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      p="6"
      align="center"
      fontSize="3xl"
      fontWeight="bold"
    >
      <Logo />

      <Flex w="100%" position="relative" justify="center">
        <SearchBar />
      </Flex>
    </Flex>
  );
}
