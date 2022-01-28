import { Flex } from "@chakra-ui/react";

import { CoinBase } from "./CoinBase";

export function Dashboard() {
  return (
    <Flex w="100%" direction="column">
      <CoinBase />
    </Flex>
  );
}
