import "@/styles/index.css";
import type { AppProps } from "next/app";

export default async function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
