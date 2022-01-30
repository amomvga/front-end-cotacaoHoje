import { Flex } from "@chakra-ui/react";
import { StockMarket } from "../components/StockMarket";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar.tsx";

export default function Stock() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <StockMarket />
      </Flex>
    </Flex>
  );
}