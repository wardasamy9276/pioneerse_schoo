import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SchoolSplitSection() {
    const points = [
        "إدارة مدرسية إلكترونية متكاملة",
        "متابعة لحظية لأداء الطلاب",
        "تواصل مباشر مع أولياء الأمور",
        "تقارير ونتائج دقيقة",
        "واجهة سهلة الاستخدام",
    ];
    return (_jsx("section", { className: "py-10 bg-[#0f172a] text-white w-full", dir: "rtl", children: _jsxs("div", { className: "container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center", children: [_jsxs("div", { className: "space-y-6 text-right", children: [_jsx("h2", { className: "text-3xl font-bold", children: "\u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0645\u062F\u0631\u0633\u064A \u0645\u062A\u0643\u0627\u0645\u0644" }), _jsx("p", { className: "text-gray-300 leading-relaxed", children: "\u0646\u0648\u0641\u0631 \u0644\u0643 \u0645\u0646\u0635\u0629 \u0630\u0643\u064A\u0629 \u062A\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062F\u0631\u0633\u0629 \u0628\u0633\u0647\u0648\u0644\u0629 \u0648\u0643\u0641\u0627\u0621\u0629 \u0645\u0639 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0628\u064A\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0639\u0644\u0645\u064A\u0646 \u0648\u0623\u0648\u0644\u064A\u0627\u0621 \u0627\u0644\u0623\u0645\u0648\u0631." }), _jsx("ul", { className: "space-y-3", children: points.map((item, index) => (_jsxs("a", { href: "/", className: "flex items-start gap-3", children: [_jsx("span", { className: "text-[#facc15] text-xl", children: "\u2713" }), _jsx("span", { children: item })] }, index))) })] }), _jsx("div", { className: "flex justify-center", children: _jsx("img", { src: "src/assets/imgLogo/school.webp", alt: "School System", className: "rounded-2xl shadow-lg max-w-full" }) })] }) }));
}
