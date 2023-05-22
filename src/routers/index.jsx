import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Preload from "../layouts/Preload";

const Layout = lazy(() => import("../layouts/index"));
const Home = lazy(() => import("../pages/Home"));

export default function Router() {
  return (
    <Suspense fallback={<Preload />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
