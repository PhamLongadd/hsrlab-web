import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import Layout from "@/components/layout";
import "./global.css";
import { CartCountProvider } from "@/components/cartCount";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <CartCountProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartCountProvider>
    </ChakraProvider>
  );
}
