import { createRoot } from "react-dom/client";
import { env } from "./utils/functions";

import App from "./App";
import "./assets/css/index.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);

reportWebVitals();
