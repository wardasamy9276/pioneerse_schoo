import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function SchoolFeatures() {
    const [showCard, setShowCard] = useState(false);
    // مثال على بيانات المميزات
    const features = [
        "منهج متطور",
        "معلمين مؤهلين",
        "أنشطة رياضية وثقافية",
        "بيئة تعليمية آمنة",
    ];
    return (_jsxs("div", { className: "relative", children: [_jsx("div", { className: "fixed bottom-4 right-4", children: _jsx("button", { onClick: () => setShowCard(!showCard), className: "bg-[#9E7C2F] text-white px-6 py-3\r\n           rounded-xl shadow-lg hover:bg-[#7d6224] transition", children: "\u0639\u0631\u0636 \u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u062F\u0631\u0633\u0629" }) }), showCard && (_jsxs("div", { className: "fixed bottom-20 right-4 bg-[#c59b3a] p-6 rounded-xl\r\n         shadow-xl w-80 h-[400px] border border-gray-200 flex flex-col text-center justify-center items-center", children: [_jsx("h3", { className: "text-xl font-bold mb-3 text-black", children: "\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u062F\u0631\u0633\u0629" }), _jsx("ul", { className: "list-disc list-inside space-y-1 list-none", children: features.map((feature, idx) => (_jsx("li", { className: "", children: feature }, idx))) }), _jsx("button", { onClick: () => setShowCard(false), className: "mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300", children: "\u0625\u063A\u0644\u0627\u0642" })] }))] }));
}
