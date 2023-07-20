import { Metadata } from "next";

import { GlobalScrollProvider } from "@hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "@hooks/useGlobalMouseMove";
import { GlobalThemeProvider } from "@hooks/useTheme";

import AuthProvider from "@providers/AuthProvider";

import Wrapper from "@components/sections/Wrapper";
import Nav from "@components/sections/Nav";
import Footer from "@components/sections/Footer";
import ScrollToTop from "@components/partials/ScrollToTop";

import "@/styles/index.css";

const title = "fiandev's portfolio",
  thumbnail = "https://fiandev.my.id/graph.png",
  description =
    "Hi everyone, I'm Fian junior software engineer and fullstack web developer from Indonesia 🇮🇩, I'm very interested in the world of programming, my favorite language is javaScript, Python, And PHP.",
  keywords =
    "fiandev, webdev, web, dev, portfolio, frontend, backend, web developer, developer, coder, programmer, freelancer, fian, alfian, aditia, akbar, putra, alfiansa",
  baseURL = "https://fiandev.my.id",
  siteName = "fiandev's portfolio";

export const metadata: Metadata = {
  title: title,
  metadataBase: new URL(baseURL),
  description: description,
  keywords: keywords,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "6JyPQefQInzqKGO1cXqAmDMa7gPZoqFRdjIDSyFkRo8",
    other: {
      me: ["fiandev1234@gmail.com"],
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
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
              <Footer />
            </GlobalThemeProvider>
          </AuthProvider>
        </Wrapper>
      </body>
    </html>
  );
}
