import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Routes>
      <App />
    </Routes>
  </StrictMode>,
  rootElement
);
