import {
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  theme,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FormEvent, useEffect, useState } from "react";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import { coinBase } from "../../services/api";
import { SearchBar, urlType } from "./SearchBar";
import coinList from "./coinList.json";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function CoinBase() {
  const [current, setCurrent] = useState("");
  const [last, setLast] = useState("");

  useEffect(() => {
    coinBase.get(`last/USD-BRL`).then((response) => {
      setCurrent(response.data.USDBRL);
    });

    coinBase
      .get(`${urlType}-BRL/30`)
      .then((response) =>
        setLast(response.data.map((n) => Number(n.bid)).reverse())
      );
    setInterval(() => {
      coinBase.get(`last/${urlType}-BRL`).then((response) => {
        setCurrent(response.data[`${urlType}BRL`]);
      });
    }, 10000);
  }, []);

  function handleSearch(event: FormEvent) {
    event.preventDefault();
  }

  var { name, low, high, pctChange, bid, varBid }: any = current;

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight" as const,
    },
    tooltip: {
      inverseOrder: true,
      theme: "dark" as const,
      x: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0,
      },
    },
  };

  const series = [
    {
      name: "Preço",
      data: [...last],
    },
  ];

  return (
    <Stack spacing="4">
      <Flex
        justifySelf="flex-end"
        alignSelf="flex-end"
        direction="column"
        maxWidth={313}
      >
        <SearchBar data={coinList} />
      </Flex>
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

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem
          w="100%"
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
        >
          <Text fontSize="x-large">VALOR ATUAL</Text>
          <Text fontWeight="bold" fontSize="xl" color="purple.500">
            R$ {Number(bid)}
          </Text>
          {Number(varBid) >= 0 ? (
            <Flex alignItems="center">
              <Icon as={RiArrowUpFill} w="4" mr="1" color="green" />
              <Text as="span" color="green">
                {varBid}
              </Text>
            </Flex>
          ) : (
            <Flex alignItems="center">
              <Icon as={RiArrowDownFill} w="4" mr="1" color="red" />
              <Text as="span" color="red">
                {varBid}
              </Text>
            </Flex>
          )}
        </GridItem>

        <GridItem
          w="100%"
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
        >
          <Text fontSize="x-large">MÁXIMA DO DIA</Text>
          <Text fontWeight="bold" fontSize="xl">
            R$ {Number(high).toFixed(2)}
          </Text>
        </GridItem>

        <GridItem
          w="100%"
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
        >
          <Text fontSize="x-large">MINIMA DO DIA</Text>
          <Text fontWeight="bold" fontSize="xl">
            R$ {Number(low).toFixed(2)}
          </Text>
        </GridItem>

        <GridItem
          w="100%"
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
        >
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
        </GridItem>
      </Grid>

      <Flex
        p="2"
        bg="gray.800"
        borderRadius={8}
        border="1px"
        borderColor="purple.800"
        pb="4"
        align="center"
        justify="center"
      >
        <Chart
          type="area"
          width={1000}
          height={250}
          series={series}
          options={options}
        />
      </Flex>
    </Stack>
  );
}
