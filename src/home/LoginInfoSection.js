import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DemoModal from "../Category/DemoModal";
export default function LoginInfoSection() {
    const info = [
        "استخدمي البريد الإلكتروني المسجل في المدرسة",
        "كلمة المرور حساسة لحالة الأحرف",
        "في حال نسيان كلمة المرور، اضغطي على (نسيت كلمة المرور)",
        "لو عندك مشكلة في الدخول، تواصلي مع الإدارة",
    ];
    return (_jsxs("div", { className: "flex flex-col p-9 items-end w-full gap-11", children: [_jsxs("div", { className: "bg-gray-50 p-6 rounded-2xl text-right", dir: "rtl", children: [_jsx("h3", { className: "font-bold text-lg mb-4", children: "\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }), _jsx("ul", { className: "space-y-3 text-sm text-gray-600", children: info.map((item, index) => (_jsxs("li", { className: "flex gap-2", children: [_jsx("span", { className: "text-[#9E7C2F]", children: "\u2022" }), _jsx("span", { children: item })] }, index))) })] }), _jsx(DemoModal, {})] }));
}
