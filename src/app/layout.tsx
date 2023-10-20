import { Metadata } from "next";
import { lazy } from "react";

import { GlobalScrollProvider } from "@hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "@hooks/useGlobalMouseMove";
import { GlobalThemeProvider } from "@hooks/useTheme";

import AuthProvider from "@providers/AuthProvider";

// import Wrapper from "@components/sections/Wrapper";
// import Nav from "@components/sections/Nav";
// import Footer from "@components/sections/Footer";
const Wrapper = lazy(() => import("@components/sections/Wrapper"));
const Nav = lazy(() => import("@components/sections/Nav"));
const Footer = lazy(() => import("@components/sections/Footer"));
// import ScrollToTop from "@components/partials/ScrollToTop";
const ScrollToTop = lazy(() => import("@components/partials/ScrollToTop"));

import "@/styles/index.css";

const title = "fiandev's portfolio",
  thumbnail = "https://fiandev.my.id/poster.jpg",
  description =
    "Hi everyone, I am Fian junior software engineer and fullstack web developer, I am very interested in the world of programming, my favorite languages are JavaScript, Python and PHP.",
  keywords =
    "fiandev, webdev, web, dev, portfolio, frontend, backend, web developer, developer, coder, programmer, freelancer, fian, aditia, akbar, putra, alfiansa, IT Support",
  baseURL = "https://fiandev.my.id",
  siteName = "fiandev's portfolio";

export const metadata: Metadata = {
  title: title,
  metadataBase: new URL(baseURL),
  description: description,
  keywords: keywords,
  category: "personal website",
  type: "website",
  locale: "en_US",
  creator: "fian",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: "6JyPQefQInzqKGO1cXqAmDMa7gPZoqFRdjIDSyFkRo8",
    yandex: "45ef227dddb68c4b",
    bing: "2B357FEFFB2A5648990DF22A1C80B02C",
    other: {
      github: "fiandev",
      "msvalidate.01": "2B357FEFFB2A5648990DF22A1C80B02C",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    siteId: "",
    creator: "@fiandev",
    creatorId: "",
    images: [thumbnail],
  },
  alternates: {
    canonical: baseURL,
    /*
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
    */
  },
  openGraph: {
    title: title,
    images: [thumbnail],
    description: description,
    url: baseURL,
    siteName: siteName,
    authors: ["fiandev"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let json = (await import("@assets/json/data.json")).default;
  let data = json.data;

  return (
    <html lang="en-US">
      <body className="relative flex flex-col min-h-screen w-screen">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Wrapper>
          <AuthProvider>
            <GlobalThemeProvider>
              <Nav />
              <GlobalScrollProvider>
                <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
              </GlobalScrollProvider>
              <ScrollToTop className="bg-main text-slate-800 dark:bg-slate-800 dark:text-main" />
              <Footer links={data.links} />
            </GlobalThemeProvider>
          </AuthProvider>
        </Wrapper>
      </body>
    </html>
  );
}
