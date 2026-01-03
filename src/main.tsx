import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import NavBar from "./navbear/NavBar";
import Footer from "./home/Footer";
import Buttons from "./Buttons";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/pioneerse_schoo">
      <NavBar />
      <App />
      <Footer />
      <Buttons />
    </BrowserRouter>
  </React.StrictMode>
);

// import { BrowserRouter } from "react-router-dom";

// <BrowserRouter basename="/pioneerse_schoo">
//   <App />
// </BrowserRouter>
