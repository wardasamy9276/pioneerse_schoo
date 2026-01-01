import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import DemoModal from "./DemoModal";
const DemoBookingCard = ({ title = "احجز عرض تجريبي سريع", description = "جرب خدمتنا بنفسك بدون أي التزام، وسيتم التواصل معك لتحديد موعد العرض التجريبي.", buttonText = "احجز الآن", }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); // تختفي بعد 3 ثواني
    };
    return (_jsxs("div", { className: "w-full max-w-2xl mx-auto p-16 bg-white\r\n     rounded-3xl shadow-xl flex flex-col md:flex-row \r\n     gap-6", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h2", { className: "text-3xl font-bold text-cyan-700 mb-2", children: title }), _jsx("p", { className: "text-cyan-900 text-lg", children: description })] }), _jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsx("button", { onClick: handleClick, className: "bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-transform transform hover:scale-105", children: buttonText }), showMessage && (_jsx("div", { className: "bg-cyan-50 border border-cyan-700 text-cyan-900 px-4 py-2 rounded-xl shadow-md animate-fadeIn", children: "\u0634\u0643\u0631\u0627\u064B! \u0633\u064A\u062A\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u0627\u064B \u0644\u0639\u0631\u0636 \u062A\u062C\u0631\u064A\u0628\u064A." }))] }), showModal && _jsx(DemoModal, { onClose: () => setShowModal(false) })] }));
};
export default DemoBookingCard;
