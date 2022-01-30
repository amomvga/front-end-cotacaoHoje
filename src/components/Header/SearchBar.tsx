import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";

interface SearchBarProps extends ChakraInputProps {}

export function SearchBar({...rest}: SearchBarProps) {
  return (
    <Flex
      as="label"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      align="center"
      justify="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        bg="none"
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar"
        _placeholder={{ color: "gray.400" }}
        {...rest}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
