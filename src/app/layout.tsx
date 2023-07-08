import { GlobalScrollProvider } from "@hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "@hooks/useGlobalMouseMove";
import Nav from "@components/sections/Nav";
import Footer from "@components/sections/Footer";
import ScrollToTop from "@components/partials/ScrollToTop";

import "@/styles/index.css";

export const metadata = {
  title: "fiandev's portfolio",
  description:
    "Hi everyone, I'm Fian junior software engineer and fullstack web developer from Indonesia 🇮🇩, I'm very interested in the world of programming, my favorite language is javascript, Python, And PHP.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative flex flex-col min-h-screen w-screen">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
          <Nav />
          <div className="w-full pt-10 md:pt-14 lg:pt-10">
            <GlobalScrollProvider>
              <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
            </GlobalScrollProvider>
            <ScrollToTop className="bg-main text-slate-800 dark:bg-slate-800 dark:text-main" />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
