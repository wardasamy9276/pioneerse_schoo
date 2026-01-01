import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SchoolCard = ({ logo, name, location, level, bgColor, }) => {
    return (_jsxs("div", { className: `flex items-center gap-4 rounded-2xl
         p-4 shadow-lg hover:scale-105
          transition-transform w-full`, style: { backgroundColor: bgColor }, children: [_jsx("img", { src: logo, alt: name, className: "w-20 h-20 rounded-full border-2 border-white" }), _jsxs("div", { className: "flex-1 flex flex-col gap-1", children: [_jsx("h2", { className: "text-lg sm:text-xl font-bold text-gray-900", children: name }), _jsx("p", { className: "text-sm text-gray-700", children: location }), _jsx("p", { className: "text-sm text-gray-700", children: level }), _jsxs("div", { className: "flex gap-2 mt-2 flex-wrap", children: [_jsx("button", { className: "bg-white text-gray-800 \r\n          px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-100 transition", children: "View Profile" }), _jsx("button", { className: "bg-white text-gray-800\r\n           px-3 py-1 rounded-lg text-sm font-semibold\r\n            hover:bg-gray-100 transition", children: "Contact" })] })] })] }));
};
export default function SchoolCardPage() {
    const logo = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
    const schools = [
        {
            name: "مدرسة 6 أكتوبر الدولية",
            location: "6 أكتوبر",
            level: "Primary & Secondary",
            color: "#b5b5b5",
        },
        {
            name: "مدرسة أوبتيموم الخاصة",
            location: "6 أكتوبر",
            level: "Primary",
            color: "#afada9",
        },
        {
            name: "مدرسة المستقبل الخاصة",
            location: "6 أكتوبر",
            level: "Secondary",
            color: "#eae9e8",
        },
        {
            name: "مدرسة رواد 6 أكتوبر",
            location: "6 أكتوبر",
            level: "Primary",
            color: "#a8a7a7",
        },
        {
            name: "مدرسة الشمس الخاصة",
            location: "6 أكتوبر",
            level: "Secondary",
            color: "#ebe3e3",
        },
        {
            name: "مدرسة الأمل الخاصة",
            location: "6 أكتوبر",
            level: "Primary & Secondary",
            color: "#ffffffca",
        },
        {
            name: "مدرسة النخبة 6 أكتوبر",
            location: "6 أكتوبر",
            level: "Primary",
            color: "#fff9f0",
        },
        {
            name: "مدرسة النجاح الخاصة",
            location: "6 أكتوبر",
            level: "Secondary",
            color: "#d6d2cc",
        },
        {
            name: "مدرسة القمة",
            location: "6 أكتوبر",
            level: "Primary",
            color: "#dbd8cbac",
        },
        {
            name: "مدرسة الأفق",
            location: "6 أكتوبر",
            level: "Secondary",
            color: "#cec9be",
        },
        {
            name: "مدرسة الامل الجديدة",
            location: "6 أكتوبر",
            level: "Primary",
            color: "#e7e6e4a7",
        },
        {
            name: "مدرسة المستقبل الحديثة",
            location: "6 أكتوبر",
            level: "Secondary",
            color: "#eee2d7",
        },
        {
            name: "مدرسة براعم 6 أكتوبر",
            location: "6 أكتوبر",
            level: "Primary",
            color: "#ece7d0",
        },
        {
            name: "مدرسة التفوق",
            location: "6 أكتوبر",
            level: "Secondary",
            color: "#eae9e6e2",
        },
        {
            name: "مدرسة النيل الجديدة",
            location: "6 أكتوبر",
            level: "Primary & Secondary",
            color: "#fffcf7b0",
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-100  flex justify-center p-9", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6", children: schools.map((school, index) => (_jsx(SchoolCard, { logo: logo, name: school.name, location: school.location, level: school.level, bgColor: school.color }, index))) }) }));
}
