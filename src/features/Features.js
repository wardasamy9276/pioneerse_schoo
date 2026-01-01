import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import LoingFeatures from "../features/Loing-Features";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import LoginInfoSection from "../home/LoginInfoSection";
// بيانات التواصل
const contactData = {
    mainLinks: [
        { title: "الرئيسية", url: "/" },
        { title: "تواصل معنا", url: "/contact" },
    ],
    sections: [
        {
            title: "تواصل معنا",
            info: [
                { type: "أرقام المبيعات", contacts: ["201040381899"] },
                {
                    type: "أرقام الدعم الفني",
                    contacts: ["201040381899", "201040381899", "201040381899"],
                },
                { type: "البريد الإلكتروني", contacts: ["ward.com"] },
                {
                    type: "أرقام الإدارة",
                    contacts: [
                        "+201040381899",
                        "+201040381899",
                        "+201040381899",
                        "+201040381899",
                    ],
                },
                {
                    type: "مواعيد العمل",
                    contacts: [
                        "   من الأحد إلى الخميس، من 10 صباحًا إلى 6 مساءً بتوقيت القاهره",
                    ],
                },
            ],
        },
    ],
};
export default function ContactInfo() {
    return (_jsxs("div", { className: "p-10 gap-7", children: [_jsxs("h2", { className: "text-cyan-700 text-center font-bold text-[30px]", children: ["\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", " "] }), _jsxs("p", { className: "text-cyan-900 text-center font-bold text-[30px]", children: ["\u0632\u0648\u0631\u0648 \u0645\u0648\u0642\u0639\u0646\u0627 \u0627\u0644\u0627\u0643\u062A\u0631\u0648\u0646\u064A", " "] }), _jsxs("div", { className: "p-6 md:p-10 flex flex-col md:flex-row md:justify-between gap-10", dir: "rtl", children: [_jsx("div", { className: "flex-1 space-y-8 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-right", children: contactData.sections.map((section, sIdx) => (_jsxs("div", { children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold text-[#9E7C2F] mb-6", children: section.title }), section.info.map((info, iIdx) => (_jsxs("div", { className: "flex flex-col md:flex-row md:items-start gap-4 mb-6", children: [_jsxs("div", { className: "text-[#9E7C2F] text-2xl md:text-xl min-w-[40px]", children: [info.type.includes("أرقام") && _jsx(FaPhone, {}), info.type.includes("البريد") && _jsx(FaEnvelope, {}), info.type.includes("مواعيد") && _jsx(FaClock, {})] }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-lg md:text-xl mb-2", children: info.type }), _jsx("ul", { className: "list-none list-inside text-gray-700 space-y-1", children: info.contacts.map((contact, cIdx) => (_jsx("li", { className: "hover:text-blue-700 transition-colors", children: contact }, cIdx))) })] })] }, iIdx)))] }, sIdx))) }), _jsx("div", { className: "flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300", children: _jsx(LoingFeatures, {}) })] }), _jsx(LoginInfoSection, {})] }));
}
