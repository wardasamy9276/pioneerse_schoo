import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import NavBar from "./navbear/NavBar";
import Footer from "./home/Footer";
import Buttons from "./Buttons";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      <App />
      <Footer />
      <Buttons />
    </HashRouter>
  </React.StrictMode>
);
