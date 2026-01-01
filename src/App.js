import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Card from "./home/Card";
import About from "./About/About";
import Features from "./features/Features";
import Blog from "./blog/Blog";
import Clients from "./clients/Clients";
import Highlights from "./Highlights/Highlights";
import Signin from "./components/Signin";
import Cstmuers from "./page/Cstmuers";
import ContactCar from "./page/ContactCard";
import Dashboard from "./dashord/Dashboard";
import Londing from "./page/Londing";
import Pages from "./FeatureWithVideo/Pages";
import FAQPages from "./home/FAQPages";
import ConfirmationCard from "./home/ConfirmationCardProps";
import Customers from "./Category/customers";
function App() {
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/features", element: _jsx(Features, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "/clients", element: _jsx(Clients, {}) }), _jsx(Route, { path: "/Highlights", element: _jsx(Highlights, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/card", element: _jsx(Card, {}) }), _jsx(Route, { path: "/contactCar", element: _jsx(ContactCar, {}) }), _jsx(Route, { path: "/signin", element: _jsx(Signin, {}) }), _jsx(Route, { path: "/cstmuers", element: _jsx(Cstmuers, {}) }), _jsx(Route, { path: "/londing", element: _jsx(Londing, {}) }), _jsx(Route, { path: "/pages", element: _jsx(Pages, {}) }), _jsx(Route, { path: "/faqpages", element: _jsx(FAQPages, {}) }), _jsx(Route, { path: "/customers", element: _jsx(Customers, {}) }), _jsx(Route, { path: "/ConfirmationCardProps", element: _jsx(ConfirmationCard, {}) })] }) }));
}
export default App;
