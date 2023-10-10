import Layout from "@/components/Layout";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
