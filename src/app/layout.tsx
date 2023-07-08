import { GlobalScrollProvider } from "@hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "@hooks/useGlobalMouseMove";
import theme from "@utils/theme";
import Nav from "@components/sections/Nav";
import Footer from "@components/sections/Footer";
import ScrollToTop from "@components/partials/ScrollToTop";


export const metadata = {
  title: "My portofolio ",
  description: "learn nextjs",
};

export default function RootLayout ({ children }) {
  return (
      <html>
        <head>
        </head>
          <body
            className="relative flex flex-col min-h-screen w-screen"
            onLoad={theme}
          >
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
              <Nav />
              <div className="w-full pt-10 md:pt-14 lg:pt-10">
                <GlobalScrollProvider>
                  <GlobalMouseMoveProvider>
                    {children}
                  </GlobalMouseMoveProvider>
                </GlobalScrollProvider>
                <ScrollToTop className="bg-main text-slate-800 dark:bg-slate-800 dark:text-main" />
              </div>
              <Footer />
            </div>
          </body>
        </body>
      </html>
    )
}