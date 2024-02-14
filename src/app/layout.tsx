import { Metadata } from "next";
import { lazy } from "react";
import "@/styles/index.css";

const Wrapper = lazy(() => import("@components/sections/Wrapper"));
const Nav = lazy(() => import("@components/sections/Nav"));
const Footer = lazy(() => import("@components/sections/Footer"));
const ScrollToTop = lazy(() => import("@components/partials/ScrollToTop"));

const title = "fiandev's portfolio",
  thumbnail = "https://fiandev.my.id/graph.jpg",
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
    me: "fiandev",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className="relative flex flex-col bg-slate-50 min-h-screen w-screen">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Wrapper>
          <Nav />
          <div className="w-screen md:w-[80%] md:mx-auto">
            {children}
            <ScrollToTop className="bg-main text-slate-800 dark:bg-slate-800 dark:text-main" />
            <Footer />
          </div>
        </Wrapper>
      </body>
    </html>
  );
}
