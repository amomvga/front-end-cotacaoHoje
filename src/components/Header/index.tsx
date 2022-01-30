import { Flex } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [search, setSearch] = useState("");

  function handleSearch(event: FormEvent) {
    event.preventDefault();
  }

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
        <SearchBar
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
      </Flex>
    </Flex>
  );
}
