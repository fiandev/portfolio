import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "@/styles/index.css";
import type { AppProps } from "next/app";

library.add(fab);

export default async function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
