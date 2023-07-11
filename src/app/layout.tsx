
import { GlobalScrollProvider } from "@hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "@hooks/useGlobalMouseMove";
import { GlobalThemeProvider } from "@hooks/useTheme";

import Wrapper from "@components/sections/Wrapper";
import Nav from "@components/sections/Nav";
import Footer from "@components/sections/Footer";
import ScrollToTop from "@components/partials/ScrollToTop";

import "@/styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      
      
      <body className="relative flex flex-col min-h-screen w-screen">
        <noscript>
          You need to enable JavaScript to run this app.
          
        </noscript>
        <div id="root">
          <GlobalThemeProvider>
            <Wrapper>
              <Nav />
              <GlobalScrollProvider>
                <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
              </GlobalScrollProvider>
              <ScrollToTop className="bg-main text-slate-800 dark:bg-slate-800 dark:text-main" />
              <Footer />
            </Wrapper>
          </GlobalThemeProvider>
        </div>
      </body>
    </html>
  );
}
