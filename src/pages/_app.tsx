import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@/components/layout";
import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
