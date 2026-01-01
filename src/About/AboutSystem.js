import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function AboutSystem() {
    const highlights = [
        "نظام إدارة المدرسة متكامل وسهل الاستخدام",
        "متابعة لحظية لأداء الطلاب والمعلمين",
        "تواصل مباشر وفعال مع أولياء الأمور",
        "إصدار تقارير دقيقة وسريعة",
        "واجهة حديثة وتصميم جذاب",
    ];
    return (_jsx("section", { className: "py-20 bg-white text-right", dir: "rtl", children: _jsxs("div", { className: "container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-4xl font-bold text-[#9E7C2F]", children: "\u0639\u0646 \u0627\u0644\u0646\u0638\u0627\u0645" }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed", children: "\u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062F\u0631\u0633\u0629 \u0647\u0648 \u0645\u0646\u0635\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u0647\u062F\u0641 \u0625\u0644\u0649 \u062A\u0633\u0647\u064A\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629\u060C \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0628\u064A\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0639\u0644\u0645\u064A\u0646 \u0648\u0623\u0648\u0644\u064A\u0627\u0621 \u0627\u0644\u0623\u0645\u0648\u0631." }), _jsx("ul", { className: "space-y-3 text-gray-700", children: highlights.map((item, index) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-[#facc15] text-xl", children: "\u2713" }), _jsx("span", { children: item })] }, index))) })] }), _jsx("div", { className: "flex justify-center", children: _jsx("img", { src: "/school-about.png", alt: "About School System", className: "rounded-2xl shadow-lg max-w-full" }) })] }) }));
}
