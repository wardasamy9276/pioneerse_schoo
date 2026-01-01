import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SchoolPrograms() {
    const programs = [
        {
            title: "المرحلة الابتدائية",
            desc: "تعليم أساسي متكامل يركز على بناء المهارات",
        },
        {
            title: "المرحلة الإعدادية",
            desc: "تنمية التفكير والتحليل والاستعداد للمرحلة الثانوية",
        },
        {
            title: "المرحلة الثانوية",
            desc: "إعداد أكاديمي قوي للجامعات",
        },
        {
            title: "الأنشطة المدرسية",
            desc: "أنشطة رياضية وفنية وثقافية لتنمية شخصية ومهارات الطالب",
        },
    ];
    return (_jsxs("section", { className: "py-12 bg-white text-right", dir: "rtl", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-8", children: "\u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629" }), _jsx("div", { className: "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: programs.map((item, index) => (_jsxs("div", { className: "border p-6 rounded-xl hover:shadow-lg transition", children: [_jsx("h3", { className: "font-bold text-lg mb-2", children: item.title }), _jsx("p", { className: "text-gray-600 text-sm", children: item.desc })] }, index))) })] }));
}
