import { Box } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8" maxWidth={1480}>
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
      </NavSection>
    </Box>
  );
}

