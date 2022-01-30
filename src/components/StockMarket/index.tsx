import { Flex } from "@chakra-ui/react";

import { MarketBase } from "./MarketBase";

export function StockMarket() {
  return (
    <Flex w="100%" direction="column">
      <MarketBase />
    </Flex>
  );
}
