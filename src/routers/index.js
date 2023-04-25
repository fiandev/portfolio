import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../layouts/index";
import Home from "../pages/Home";

export default function Router () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    )
}