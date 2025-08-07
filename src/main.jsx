import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import Router from "./Router.jsx";

import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <Router />
    </ReduxProvider>
  </StrictMode>
);
