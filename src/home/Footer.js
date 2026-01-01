import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp, FaYoutube, } from "react-icons/fa";
export default function Footer() {
    const quickLinks = [
        "الرئيسية",
        "من نحن",
        "الأخبار",
        "اتصل بنا",
        "خدماتنا",
        "الفعاليات",
        "المعلمون",
        "الطلاب",
        "التقديم",
        "سياسة الخصوصية",
        "الشروط والأحكام",
        "المقالات",
        "المشاريع",
        "التقارير",
        "المدونة",
        "الأنشطة",
        "الاستفسارات",
        "الوظائف",
        "الدعم الفني",
        "اتصل بنا الآن",
    ];
    // تقسيم الـ 20 رابط على 3 أعمدة
    const columns = [[], [], []];
    quickLinks.forEach((link, idx) => {
        columns[idx % 3].push(link);
    });
    return (_jsxs("footer", { className: "bg-[#0f172a] text-white py-10 px-6 md:px-20", children: [_jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0", children: [_jsxs("div", { className: "flex flex-col items-center md:items-start mb-6 md:mb-0", children: [_jsx("img", { src: "src/assets/imgLogo/school.webp", alt: "School Logo", className: "w-32 mb-4" }), _jsx("p", { className: "text-gray-300 text-sm", children: "\u00A9 2026 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u0644\u0645\u062F\u0631\u0633\u0629" })] }), _jsx("div", { className: "flex w-full justify-between", children: columns.map((col, colIdx) => (_jsx("div", { className: "flex flex-col space-y-2", children: col.map((link, idx) => (_jsx("a", { href: "#", className: "text-gray-300 hover:text-[#9E7C2F]", children: link }, idx))) }, colIdx))) })] }), _jsx("div", { className: "mt-8 border-t border-gray-700 pt-4 text-center\r\n      text-gray-400 text-sm ", children: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u00A9 2026" }), _jsxs("div", { className: "flex flex-col space-y-2  justify-around items-center gap-6:", children: [_jsx("span", { className: "font-semibold p-6", children: "\u062A\u0627\u0628\u0639\u0646\u0627 \u0639\u0644\u0649" }), _jsxs("div", { className: "flex gap-8 mt-2", children: [_jsx("a", { href: "#", className: "hover:text-[#9E7C2F]", children: _jsx(FaFacebookF, { size: 30 }) }), _jsx("a", { href: "#", className: "hover:text-[#9E7C2F]", children: _jsx(FaTelegramPlane, { size: 30 }) }), _jsx("a", { href: "#", className: "hover:text-[#9E7C2F]", children: _jsx(FaWhatsapp, { size: 30 }) }), _jsx("a", { href: "#", className: "hover:text-[#9E7C2F]", children: _jsx(FaYoutube, { size: 30 }) })] })] })] }));
}
