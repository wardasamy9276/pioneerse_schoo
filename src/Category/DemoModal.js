import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export default function DemoModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setSubmitted(false);
        setName("");
        setPhone("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(closeModal, 3000); // يغلق تلقائيًا بعد 3 ثواني
    };
    return (_jsxs("div", { className: " \r\n   ", children: [_jsx("button", { onClick: openModal, className: "bg-cyan-700 hover:bg-[#164e63] text-white px-6 py-3 rounded-3xl shadow-lg transform hover:scale-105 transition-all", children: "\u0627\u062D\u062C\u0632 \u0639\u0631\u0636 \u062A\u062C\u0631\u064A\u0628\u064A \u0645\u0628\u0647\u0631" }), isOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-white rounded-3xl p-8 w-11/12 sm:w-96 shadow-2xl relative animate-fadeIn", children: [_jsx("button", { onClick: closeModal, className: "absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-xl font-bold", children: "\u2715" }), !submitted ? (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4 text-center", children: "\u0627\u062D\u062C\u0632 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A" }), _jsxs("form", { className: "flex flex-col gap-4", onSubmit: handleSubmit, children: [_jsx("input", { type: "text", placeholder: "\u0627\u0633\u0645\u0643", value: name, onChange: (e) => setName(e.target.value), required: true, className: "border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" }), _jsx("input", { type: "tel", placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", value: phone, onChange: (e) => setPhone(e.target.value), required: true, className: "border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" }), _jsx("button", { type: "submit", className: "bg-cyan-700 hover:bg-[#164e63] text-white px-6 py-3 rounded-2xl shadow-md transition-transform transform hover:scale-105", children: "\u0627\u0631\u0633\u0627\u0644" })] })] })) : (_jsxs("div", { className: "text-center text-green-600 font-semibold text-lg", children: ["\u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643! ", _jsx("br", {}), " \u0633\u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u064B\u0627."] }))] }) }))] }));
}
