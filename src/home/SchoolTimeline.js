import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SchoolTimeline() {
    const steps = [
        {
            title: "التسجيل",
            desc: "تقديم طلب الالتحاق بالمدرسة إلكترونيًا",
        },
        {
            title: "المقابلة",
            desc: "مقابلة الطالب وولي الأمر",
        },
        {
            title: "القبول",
            desc: "إشعار القبول واستكمال الأوراق",
        },
        {
            title: "بداية الدراسة",
            desc: "انضمام الطالب للعام الدراسي",
        },
    ];
    return (_jsxs("section", { className: "py-12 bg-white text-right", dir: "rtl", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-12", children: "\u0631\u062D\u0644\u0629 \u0627\u0644\u0637\u0627\u0644\u0628 \u0641\u064A \u0645\u062F\u0631\u0633\u062A\u0646\u0627" }), _jsxs("div", { className: "container mx-auto relative", children: [_jsx("div", { className: "absolute right-4 top-0 h-full w-1 bg-[#9E7C2F]" }), _jsx("ul", { className: "space-y-10 pr-12", children: steps.map((step, index) => (_jsxs("li", { className: "relative", children: [_jsx("span", { className: "absolute right-[-34px] top-1 w-5 h-5 bg-[#9E7C2F] rounded-full" }), _jsx("h3", { className: "font-bold text-lg mb-1", children: step.title }), _jsx("p", { className: "text-gray-600 text-sm", children: step.desc })] }, index))) })] })] }));
}
