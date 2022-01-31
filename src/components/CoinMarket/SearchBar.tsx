import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiCloseCircleFill, RiCloseFill, RiSearchLine } from "react-icons/ri";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface SearchBarProps extends ChakraInputProps {
  data?: any;
}

export var urlType = "USD";

export function SearchBar({ data, ...rest }: SearchBarProps) {
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState([]);

  const filterList = data.filter((value) => {
    return value.name.toLocaleLowerCase().includes(inputSearch);
  });

  useEffect(() => {
    setSearch(filterList);
  }, [inputSearch]);

  function handleClickAutoComplete(value) {
    urlType = value.type;
    setInputSearch(value.name);
    setSearch([]);
    console.log(value.type);
  }

  function clearText() {
    setInputSearch("");
    setSearch([]);
  }

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
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          {...rest}
        />
        {inputSearch !== "" ? (
          <Icon as={RiCloseFill} onClick={clearText} fontSize="20" />
        ) : (
          ""
        )}
      </Flex>

      {search.length !== 37 && search.length !== 0 && (
        <Flex
          direction="column"
          bg="gray.800"
          borderRadius={8}
          p="4"
          color="gray.400"
          maxHeight={250}
          overflow="hidden"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {search.map((value, key) => (
            <Text
              key={key}
              p="1"
              _hover={{ background: "gray.700" }}
              cursor="pointer"
              onClick={() => handleClickAutoComplete(value)}
            >
              {value.name}
            </Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
