import { Flex, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RiArrowUpFill } from "react-icons/ri";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Dashboard() {
  const [consulting, setConsulting] = useState("");

  useEffect(() => {
    api.get("USD-BRL").then((response) => setConsulting(response.data.USDBRL));
  }, []);

  const { name, low, high, pctChange, bid, varBid }: any = consulting;

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
      enabled: false,
    },
    xaxis: {
      type: "datetime" as const,
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2021-03-01T00:00:000Z",
        "2021-03-02:00:00.000Z",
        "2021-03-03:00:00.000Z",
        "2021-03-04:00:00.000Z",
        "2021-03-05:00:00.000Z",
        "2021-03-06:00:00.000Z",
        "2021-03-07:00:00.000Z",
        "2021-03-08:00:00.000Z",
        "2021-03-09:00:00.000Z",
        "2021-03-10:00:00.000Z",
        "2021-03-11:00:00.000Z",
        "2021-03-12:00:00.000Z",
        "2021-03-13:00:00.000Z",
        "2021-03-14:00:00.000Z",
        "2021-03-15:00:00.000Z",
      ],
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
      name: "series1",
      data: [15, 25, 1, 100, 1, 100, 87, 87, 87, 87, 87, 87, 87, 87, 87],
    },
  ];

  return (
    <Flex w="100%" direction="column">
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
          <Text fontWeight="bold">{name}</Text>
        </Flex>

        <Grid
          templateColumns="repeat(4, 1fr)"
          align="center"
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
            <Text>VALOR ATUAL</Text>
            <Text fontWeight="bold" fontSize="xl" color="purple.500">
              R$ {Number(bid).toFixed(2)}
            </Text>
            <Icon as={RiArrowUpFill} w="4" mr="1" />
            <Text as="span">{varBid}</Text>
          </GridItem>

          <GridItem
            p="3"
            w="100%"
            bg="gray.800"
            borderRadius={8}
            border="1px"
            borderColor="purple.800"
          >
            <Text>MÁXIMA DO DIA</Text>
            <Text fontWeight="bold" fontSize="xl">
              R$ {Number(high).toFixed(2)}
            </Text>
          </GridItem>

          <GridItem
            p="3"
            w="100%"
            bg="gray.800"
            borderRadius={8}
            border="1px"
            borderColor="purple.800"
          >
            <Text>MINIMA DO DIA</Text>
            <Text fontWeight="bold" fontSize="xl">
              R$ {Number(low).toFixed(2)}
            </Text>
          </GridItem>

          <GridItem
            p="3"
            w="100%"
            bg="gray.800"
            borderRadius={8}
            border="1px"
            borderColor="purple.800"
          >
            <Text>PORCENTAGEM DE VARIAÇÃO</Text>
            <Text fontWeight="bold" fontSize="xl">
              {Number(pctChange).toFixed(2)}%
            </Text>
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
    </Flex>
  );
}
