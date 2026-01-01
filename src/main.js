import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";
// import "./i18n";
// import NavBar from "./navbear/Navbar.tsx";
// import Buttons from "../src/Buttons";
// import { BrowserRouter } from "react-router-dom";
// import Footer from "./home/Footer";
// createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <NavBar />
//       <App />
//       <Footer />
//       <Buttons />
//     </React.StrictMode>
//   </BrowserRouter>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import NavBar from "./navbear/Navbar";
import Footer from "./home/Footer";
import Buttons from "./Buttons";
createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsxs(BrowserRouter, { children: [_jsx(NavBar, {}), _jsx(App, {}), _jsx(Footer, {}), _jsx(Buttons, {})] }) }));
