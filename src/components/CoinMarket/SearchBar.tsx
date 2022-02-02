import { Flex, Icon, Input } from "@chakra-ui/react";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";

interface SearchBarProps extends ChakraInputProps {
  data?: any;
  icon?: any;
  action?: any;
}

export function SearchBar({ data, icon, action, ...rest }: SearchBarProps) {
  return (
    <Flex direction="column">
      <Flex
        as="label"
        py="4"
        px="8"
        maxWidth={400}
        align="center"
        justify="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius={8}
      >
        <Input
          bg="none"
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar"
          _placeholder={{ color: "gray.400" }}
          type="search"
          {...rest}
        />
        <Icon as={icon} onClick={action} />
      </Flex>
    </Flex>
  );
}
