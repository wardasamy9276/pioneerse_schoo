import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function DemoButton() {
    const [showMessage, setShowMessage] = useState(false);
    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };
    return (_jsxs("div", { className: "flex items-center justify-between p-6 gap-9 text-center", children: [_jsx("button", { onClick: handleClick, className: "bg-cyan-700 hover:bg-[#164e63]\r\n         text-white px-6 py-3 rounded-2xl \r\n         transition-transform transform \r\n         hover:scale-105 ", children: "\u0627\u062D\u062C\u0632 \u0639\u0631\u0636 \u062A\u062C\u0631\u064A\u0628\u064A \u0633\u0631\u064A\u0639" }), showMessage && (_jsx("div", { className: "bg-white border border-cyan-700 text-cyan-900 px-4 py-2 rounded-lg shadow-md animate-fadeIn", children: "\u0634\u0643\u0631\u0627\u064B! \u0633\u064A\u062A\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u0627\u064B \u0644\u0639\u0631\u0636 \u062A\u062C\u0631\u064A\u0628\u064A." }))] }));
}
