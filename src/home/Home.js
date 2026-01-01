import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "./Hero";
import ERPPage from "../home/Erppage";
import SectionList from "./SectionList";
import SchoolSlider from "./SchoolSlider";
import SchoolCard from "./SchoolCard";
import Login from "./Login";
import FAQComponent from "../Highlights/FAQComponent";
import SchoolStats from "../Highlights/SchoolStats";
import SchoolPrograms from "./SchoolPrograms";
import SchoolWhyUs from "./SchoolWhyUs";
import SchoolSplitSection from "./SchoolSplitSection";
import LoginInfoSection from "./LoginInfoSection";
import SchoolTimeline from "./SchoolTimeline";
import ConfirmationCard from "./ConfirmationCardProps";
// import FAQPages from "./FAQPages";
import { useTranslation } from "react-i18next";
// const { t } = useTranslation();
function Home() {
    const { t } = useTranslation();
    return (_jsxs("div", { children: [_jsx(Hero, {}), _jsx(ERPPage, {}), _jsx(SchoolWhyUs, {}), _jsx(SchoolSlider, {}), _jsx(SectionList, {}), _jsx(SchoolStats, {}), _jsx(FAQComponent, {}), _jsx(SchoolCard, {}), _jsx(SchoolTimeline, {}), _jsx(SchoolSplitSection, {}), _jsx(LoginInfoSection, {}), _jsxs("div", { children: [_jsx(ConfirmationCard, {}), _jsx(SchoolPrograms, {})] }), _jsx(Login, {})] }));
}
export default Home;
