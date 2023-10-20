"use client";
import { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Preload from "@components/partials/Preload";

import "@/styles/index.css";

library.add(fab);

export default async function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <Fragment>
      {loading ? <Preload /> : <Component {...pageProps} />}
      <Analytics />
    </Fragment>
  );
}
