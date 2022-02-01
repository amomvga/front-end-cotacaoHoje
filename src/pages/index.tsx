import { Flex } from "@chakra-ui/react";
import { CoinMarket } from "../components/CoinMarket";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <CoinMarket />
      </Flex>
    </Flex>
  );
}
