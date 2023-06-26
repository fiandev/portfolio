import { I18nextProvider } from 'react-i18next';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Wrapper from "./layouts/Wrapper";
import Router from "./routers/index";

library.add(fab);

import i18next from "./i18next";

export default function App() {
  return (
    <I18nextProvider i18n={i18next} defaultNS={'translation'}>
      <Wrapper>
        <Router />
      </Wrapper>
    </I18nextProvider>
  );
}
