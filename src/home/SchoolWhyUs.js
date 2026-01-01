import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SchoolWhyUs() {
    const reasons = [
        {
            title: "تعليم حديث",
            desc: "نستخدم أحدث الأساليب التعليمية والتقنيات الذكية",
        },
        {
            title: "كادر تعليمي متميز",
            desc: "معلمون ذوو خبرة عالية وكفاءة",
        },
        {
            title: "متابعة مستمرة",
            desc: "تواصل دائم مع أولياء الأمور",
        },
        {
            title: "بيئة آمنة",
            desc: "نحرص على توفير بيئة تعليمية آمنة ومحفزة",
        },
        {
            title: "أنشطة متنوعة",
            desc: "أنشطة رياضية وثقافية لتنمية شخصية الطالب",
        },
        {
            title: "نظام إداري ذكي",
            desc: "إدارة مدرسية إلكترونية متكاملة",
        },
    ];
    return (_jsxs("section", { className: "py-12 bg-gray-50 text-right", dir: "rtl", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-8", children: "\u0644\u0645\u0627\u0630\u0627 \u062A\u062E\u062A\u0627\u0631 \u0645\u062F\u0631\u0633\u062A\u0646\u0627\u061F" }), _jsx("div", { className: "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: reasons.map((item, index) => (_jsxs("div", { className: "bg-white p-6 rounded-2xl shadow hover:shadow-lg transition", children: [_jsx("h3", { className: "font-bold text-lg mb-2 text-[#9E7C2F]", children: item.title }), _jsx("p", { className: "text-gray-600 text-sm", children: item.desc })] }, index))) })] }));
}
