import { useEffect } from 'react';
import { GlobalScrollProvider } from './hooks/useGlobalScroll';
import { GlobalMouseMoveProvider } from './hooks/useGlobalMouseMove';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            { /* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
