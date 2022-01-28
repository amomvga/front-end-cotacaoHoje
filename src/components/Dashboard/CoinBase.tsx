import { Flex, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import { coinBase } from "../../services/api";

export function CoinBase() {
  const [consulting, setConsulting] = useState("");

  useEffect(() => {
    coinBase
      .get("last/USD-BRL")
      .then((response) => setConsulting(response.data.USDBRL));
    // setInterval(() => {
    //   api
    //     .get("last/USD-BRL")
    //     .then((response) => setConsulting(response.data.USDBRL));
    // }, 15000);
  }, []);

  var { name, low, high, pctChange, bid, varBid }: any = consulting;

  return (
    <Stack spacing="4">
      <Flex
        bg="gray.800"
        p="4"
        borderRadius={8}
        align="center"
        justify="center"
        w="100%"
        border="1px"
        borderColor="purple.800"
      >
        <Text fontSize="x-large" fontWeight="bold">
          {name}
        </Text>
      </Flex>

      <Grid
        templateColumns="repeat(4, 1fr)"
        align="center"
        alignItems="center"
        justifyItems="center"
        gap="4"
      >
        <GridItem
          p="3"
          w="100%"
          bg="gray.800"
          borderRadius={8}
          border="1px"
          borderColor="purple.800"
        >
          <Flex direction="column">
            <Text fontSize="x-large">VALOR ATUAL</Text>
            <Text fontWeight="bold" fontSize="xl" color="purple.500">
              R$ {Number(bid).toFixed(2)}
            </Text>
            {Number(varBid) >= 0 ? (
              <Flex justify="center" alignItems="center">
                <Icon as={RiArrowUpFill} w="4" mr="1" color="green" />
                <Text as="span" color="green">
                  {varBid}
                </Text>
              </Flex>
            ) : (
              <Flex justify="center" alignItems="center">
                <Icon as={RiArrowDownFill} w="4" mr="1" color="red" />
                <Text as="span" color="red">
                  {varBid}
                </Text>
              </Flex>
            )}
          </Flex>
        </GridItem>

        <GridItem
          p="3"
          w="100%"
          h="100%"
          bg="gray.800"
          borderRadius={8}
          border="1px"
          borderColor="purple.800"
        >
          <Flex direction="column">
            <Text fontSize="x-large">MÁXIMA DO DIA</Text>
            <Text fontWeight="bold" fontSize="xl">
              R$ {Number(high).toFixed(2)}
            </Text>
          </Flex>
        </GridItem>

        <GridItem
          p="3"
          w="100%"
          h="100%"
          bg="gray.800"
          borderRadius={8}
          border="1px"
          borderColor="purple.800"
        >
          <Flex direction="column">
            <Text fontSize="x-large">MINIMA DO DIA</Text>
            <Text fontWeight="bold" fontSize="xl">
              R$ {Number(low).toFixed(2)}
            </Text>
          </Flex>
        </GridItem>

        <GridItem
          p="3"
          w="100%"
          h="100%"
          bg="gray.800"
          borderRadius={8}
          border="1px"
          borderColor="purple.800"
        >
          <Flex direction="column">
            <Text fontSize="x-large">VARIAÇÃO</Text>

            {Number(pctChange) > 0 ? (
              <Text fontWeight="bold" fontSize="xl" color="green">
                {Number(pctChange).toFixed(2)}%
              </Text>
            ) : (
              <Text fontWeight="bold" fontSize="xl" color="red">
                {Number(pctChange).toFixed(2)}%
              </Text>
            )}
          </Flex>
        </GridItem>
      </Grid>
    </Stack>
  );
}
