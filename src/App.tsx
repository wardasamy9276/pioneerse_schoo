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
import SchoolsPage from "./home/SchoolsPage";
import NileInternational from "../NileInternational/NileInternational";
import TrialOffer from "../TrialOffer/TrialOffer";
import CairoModernSchool from "../NileInternational/CairoModernSchool copy";
import AlRowadSchool from "../NileInternational/AlRowadSchool";
import FutureSchool from "../NileInternational/FutureSchool";

import AlAmalSchool from "../NileInternational/AlAmalSchool";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/clients" element={<Clients />} />
        <Route path="/Highlights" element={<Highlights />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contactCar" element={<ContactCar />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cstmuers" element={<Cstmuers />} />
        <Route path="/londing" element={<Londing />} />

        <Route path="/pages" element={<Pages />} />
        <Route path="/faqpages" element={<FAQPages />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/ConfirmationCardProps" element={<ConfirmationCard />} />
        <Route path="/nileInternational" element={<NileInternational />} />
        <Route path="/trialOffer" element={<TrialOffer />} />
        <Route path="/cairoModernSchool" element={<CairoModernSchool />} />
        <Route path="/alRowadSchool" element={<AlRowadSchool />} />
        <Route path="/futureSchool" element={<FutureSchool />} />
        <Route path="/alAmalSchool" element={<AlAmalSchool />} />
      </Routes>
    </>
  );
}

export default App;
