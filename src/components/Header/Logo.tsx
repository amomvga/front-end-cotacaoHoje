import { Text, Flex } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex
      align="center"
      alignItems="center"
      alignContent="center"
      alignSelf="center"
      textAlign="center"
      justifyItems="center"
      justifySelf="center"
      justifyContent="center"
      justify="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        color="gray.500"
        borderRadius="full"
        borderColor="gray.500"
        p="6"
      >
        COTAÇÃO HOJE
      </Text>
    </Flex>
  );
}
