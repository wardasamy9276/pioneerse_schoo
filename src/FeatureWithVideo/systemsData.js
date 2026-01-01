import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const systemsData = [
    {
        id: 1,
        title: "نظام إدارة التعلم LMS",
        description: "يوفر Pioneers E-School نظام متكامل للتعلم الإلكتروني عن بعد من خلال التوصيل والتشغيل لإنشاء بيئة فصل دراسي رقمية.",
        image: "src/assets/systems/learning-management-system.webp",
    },
    {
        id: 2,
        title: "نظام معلومات الطلاب SIS",
        description: "نظام معلومات الطلاب (SIS) يساعد المدارس على تنسيق وإدارة المهام الإدارية والتعليمية بين أعضاء هيئة التدريس والإدارة.",
        image: "src/assets/systems/school-management-system.webp",
    },
    {
        id: 3,
        title: "نظام إدارة المدرسة SMS",
        description: "Pioneers E-School SMS نظام إداري متكامل يحتوي على كافة الأدوات اللازمة لإدارة المدارس الخاصة والدولية.",
        image: "src/assets/systems/student-information-system.webp",
    },
];
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-gray-100 text-gray-900", children: [_jsx("header", { className: "items-center px-6 md:px-16 py-6", children: _jsx("h1", { className: "text-3xl text-center font-bold text-cyan-700", children: "Pioneers E-School" }) }), _jsxs("section", { className: "px-6 md:px-16 py-12 text-center space-y-6", children: [_jsx("h2", { className: "text-2xl md:text-4xl font-bold text-cyan-700", children: "\u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062F\u0631\u0633\u0629 \u0627\u0644\u0645\u062B\u0627\u0644\u064A \u0644\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0645\u0624\u0633\u0633\u062A\u0643" }), _jsx("p", { className: "max-w-3xl mx-auto text-gray-700 leading-relaxed", children: "\u0646\u062D\u0646 \u0646\u0642\u062F\u0645 \u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0644\u0625\u062F\u0627\u0631\u0629 \u0645\u0624\u0633\u0633\u0629 \u062A\u0639\u0644\u064A\u0645\u064A\u0629\u060C \u0644\u062A\u0642\u062F\u064A\u0645 \u0646\u062A\u0627\u0626\u062C \u0645\u0636\u0645\u0648\u0646\u0629 \u0648\u0623\u0641\u0636\u0644\u060C \u0648\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u0631\u0642\u0645\u064A \u0628\u0627\u0644\u0643\u0627\u0645\u0644." })] }), _jsx("section", { className: "px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: systemsData.map((item) => (_jsxs("div", { className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-full h-64 object-contain" }), _jsxs("div", { className: "p-6 space-y-4 text-right flex flex-col flex-1", children: [_jsx("h3", { className: "text-xl font-bold text-cyan-700", children: item.title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed flex-1", children: item.description }), _jsx("button", { className: "bg-cyan-600 hover:bg-cyan-700 text-white w-full text-center px-4 py-2 rounded-xl transition mt-4", children: "\u0637\u0644\u0628 \u0639\u0631\u0636 \u062A\u062C\u0631\u064A\u0628\u064A" })] })] }, item.id))) }), _jsx("footer", { className: "px-6 md:px-16 py-12 text-center text-gray-700", children: "\u00A9 2026 Pioneers E-School. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629." })] }));
}
