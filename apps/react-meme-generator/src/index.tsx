import * as React from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./components/templates/Layout";
import reportWebVitals from "./report-web-vitals";
import "./styles/global.css";

const container = document.querySelector("#root");

if (container === null) {
  throw new Error("Couldn't find the app container.");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* eslint-disable-next-line @typescript-eslint/no-floating-promises -- Top-level await is not available in the configured target environment */
reportWebVitals();
