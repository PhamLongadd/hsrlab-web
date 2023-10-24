import Header from "./header";
import Footer from "./footer";

import {
  Box,
  Image,
  Flex,
  useDisclosure,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box minH="100vh">
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
};
export default Layout;
