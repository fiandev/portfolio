import { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import "@/styles/index.css";

library.add(fab);

export default async function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Analytics />
    </Fragment>
  );
}
