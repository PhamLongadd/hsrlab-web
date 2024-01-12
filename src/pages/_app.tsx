import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@/components/layout";
import "./global.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
