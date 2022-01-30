import { Flex } from "@chakra-ui/react";

import { CoinBase } from "./CoinBase";

export function CoinMarket() {
  return (
    <Flex w="100%" direction="column">
      <CoinBase />
    </Flex>
  );
}
