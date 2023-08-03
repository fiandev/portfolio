"use client";
import { useTheme } from "@hooks/useTheme";
import { useEffect, useState } from "next/link";
import { useRouter } from "next/router";

import Preload from '@components/partials/Preload'

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  const theme = useTheme();
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])
  
  return (
    <div className="w-full pt-10 md:pt-14 lg:pt-10">
      {loading ? <Preload /> : children}
    </div>
  );
}
