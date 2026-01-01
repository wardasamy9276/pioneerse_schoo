import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    { title: "نظام ذكي", desc: "إدارة كاملة للطلاب والمعلمين" },
    { title: "متابعة أولياء الأمور", desc: "تقارير فورية" },
    { title: "أمان عالي", desc: "حماية بيانات المدرسة" },
    { title: "سهولة الاستخدام", desc: "واجهة بسيطة وسريعة" },
];
export default function SchoolFeatures() {
    return (_jsxs("section", { className: "py-12 bg-gray-50", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-8", children: "\u0645\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u062F\u0631\u0633\u0629" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto", children: features.map((item, index) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow hover:shadow-lg transition", children: [_jsx("h3", { className: "font-bold text-lg mb-2", children: item.title }), _jsx("p", { className: "text-gray-600 text-sm", children: item.desc })] }, index))) })] }));
}
