import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import theme from "../utils/theme";
import Preload from "../layouts/Preload";

const Layout = lazy(() => import("../layouts/index"));
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export default function Router() {
  theme();
  return (
    <Suspense fallback={<Preload />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="*"
              element={<ErrorPage code="404" message="not found" />}
            />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
