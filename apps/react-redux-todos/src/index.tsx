import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { App } from "./app";
import store from "./store";
import "./styles/global.scss";

const container = document.querySelector("#app");

if (container === null) {
  throw new Error("Couldn't find the app container.");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.PUBLIC_URL ?? "/"}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
