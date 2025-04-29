import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Fragment } from "react";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <App />
  </Fragment>
);
