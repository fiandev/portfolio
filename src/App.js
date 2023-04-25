import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";

import Wrapper from "./layouts/Wrapper";
import Router from "./routers/index";

library.add(fab);

export default function App() {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
}