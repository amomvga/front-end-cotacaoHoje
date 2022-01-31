import { Box } from "@chakra-ui/react";
import { RiCoinFill, RiDashboardLine, RiStockFill } from "react-icons/ri";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8" maxWidth={1480}>
      <NavSection title="GERAL">
        <Link href="/">
          <NavLink icon={RiCoinFill}>Moedas</NavLink>
        </Link>

        {/* <Link href="/stock">
          <NavLink icon={RiStockFill}>Ações</NavLink>
        </Link> */}
      </NavSection>
    </Box>
  );
}
