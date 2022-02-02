import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  theme,
} from "@chakra-ui/react";
import styles from "./styles/CoinBase.module.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  RiArrowDownFill,
  RiArrowUpFill,
  RiCloseFill,
  RiSearchLine,
} from "react-icons/ri";
import { SearchBar } from "./SearchBar";
import coinList from "./coinList.json";
import { coinBase } from "../../services/api";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function CoinBase() {
  const [current, setCurrent] = useState("");
  const [last, setLast] = useState("");
  const [newSearch, setNewSearch] = useState("USD");
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    coinBase.get(`last/${newSearch}-BRL`).then((response) => {
      setCurrent(response.data[`${newSearch}BRL`]);
    });
  }, [search]);

  useEffect(() => {
    coinBase
      .get(`${newSearch}-BRL/15`)
      .then((response) =>
        setLast(response.data.map((n) => Number(n.bid)).reverse())
      );
  }, [search]);

  useEffect(() => {
    setSearch(filterList);
  }, [inputSearch]);

  const filterList = coinList.filter((value) => {
    return value.name.toLocaleLowerCase().includes(inputSearch);
  });

  function handleClickAutoComplete(value) {
    setInputSearch(value.name);
    setSearch([]);
    setNewSearch(value.type);
  }

  function clearText() {
    setInputSearch("");
    setSearch([]);
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

  var setIcon = null;

  return (
    <Stack spacing="4">
      <Flex
        justifySelf="flex-end"
        alignSelf="flex-end"
        direction="column"
        maxWidth={[200, 300]}
      >
        {inputSearch !== ""
          ? (setIcon = RiCloseFill)
          : (setIcon = RiSearchLine)}
        <SearchBar
          id="searchbar"
          data={coinList}
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value.toLowerCase())}
          icon={setIcon}
          action={clearText}
        />

        {search.length !== 37 && search.length !== 0 && (
          <Box
            direction="column"
            bg="gray.700"
            borderRadius={8}
            p="4"
            w="309px"
            mt="56px"
            color="gray.400"
            maxHeight={150}
            overflow="hidden"
            overflowY="auto"
            zIndex={1}
            position="absolute"
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
                _hover={{ background: "gray.600" }}
                cursor="pointer"
                onClick={() => handleClickAutoComplete(value)}
              >
                {value.name}
              </Text>
            ))}
          </Box>
        )}
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

      <SimpleGrid minChildWidth="140px"  spacing="4">
        <Box
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          h="108px"
        >
          <Text fontSize="x-large">VALOR ATUAL</Text>
          <Text fontWeight="bold" fontSize="xl" color="purple.500">
            R$ {Number(bid).toFixed(2)}
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
        </Box>
        <Box
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          h="108px"
        >
          <Text fontSize="x-large">MÁXIMA</Text>
          <Text fontWeight="bold" fontSize="xl">
            R$ {Number(high).toFixed(2)}
          </Text>
        </Box>
        <Box
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          h="108px"
        >
          <Text fontSize="x-large">MINIMA</Text>
          <Text fontWeight="bold" fontSize="xl">
            R$ {Number(low).toFixed(2)}
          </Text>
        </Box>
        <Box
          bg="gray.800"
          border="1px"
          borderColor="purple.800"
          p="2"
          borderRadius={8}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          h="108px"
        >
          <Text fontSize="x-large">VARIAÇÃO</Text>

          {Number(pctChange) > 0 ? (
            <Text fontWeight="bold" fontSize="xl" color="green">
              {Number(pctChange)}%
            </Text>
          ) : (
            <Text fontWeight="bold" fontSize="xl" color="red">
              {Number(pctChange)}%
            </Text>
          )}
        </Box>
      </SimpleGrid>

      <Flex
        w="100%"
        className={styles.Chart}
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
          className={styles.Chart}
          height={250}
          type="area"
          series={series}
          options={options}
        />
      </Flex>
    </Stack>
  );
}
