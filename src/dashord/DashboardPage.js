import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function FullDashboard() {
    const [showContact, setShowContact] = useState(false);
    const [activeMenu, setActiveMenu] = useState("الرئيسية");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const menuItems = [
        "الرئيسية",
        "الطلاب",
        "المدرسين",
        "المواد",
        "الإعدادات",
        "الرئيسية",
        "الطلاب",
        "المدرسين",
        "المواد",
        "الإعدادات",
    ];
    const dashboardData = {
        الرئيسية: [
            { id: 1, title: "عدد الطلاب", value: 150, emoji: "📊" },
            { id: 2, title: "عدد المدرسين", value: 20, emoji: "👩‍🏫" },
            { id: 3, title: "عدد المواد", value: 25, emoji: "📚" },
            { id: 4, title: "آخر المهام", value: 5, emoji: "📝" },
            { id: 5, title: "الإشعارات", value: 3, emoji: "🔔" },
            { id: 6, title: "الزوار اليوم", value: 45, emoji: "🌐" },
        ],
        الطلاب: [
            { id: 1, name: "أحمد علي", grade: "A", email: "ahmed@example.com" },
            { id: 2, name: "منى سعيد", grade: "B", email: "mona@example.com" },
            { id: 3, name: "محمد حسن", grade: "A", email: "mohamed@example.com" },
            { id: 4, name: "سارة جمال", grade: "B", email: "sara@example.com" },
            { id: 5, name: "أحمد علي", grade: "A", email: "ahmed@example.com" },
            { id: 6, name: "منى سعيد", grade: "B", email: "mona@example.com" },
            { id: 7, name: "أحمد علي", grade: "A", email: "ahmed@example.com" },
            { id: 8, name: "منى سعيد", grade: "B", email: "mona@example.com" },
            { id: 9, name: "محمد حسن", grade: "A", email: "mohamed@example.com" },
            { id: 10, name: "سارة جمال", grade: "B", email: "sara@example.com" },
            { id: 11, name: "أحمد علي", grade: "A", email: "ahmed@example.com" },
            { id: 12, name: "منى سعيد", grade: "B", email: "mona@example.com" },
        ],
        المدرسين: [
            { id: 1, name: "أحمد محمود", subject: "رياضيات" },
            { id: 2, name: "منى خالد", subject: "علوم" },
            { id: 3, name: "محمد سمير", subject: "لغة عربية" },
            { id: 4, name: "أحمد محمود", subject: "رياضيات" },
            { id: 5, name: "منى خالد", subject: "علوم" },
            { id: 6, name: "محمد سمير", subject: "لغة عربية" },
            { id: 1, name: "أحمد محمود", subject: "رياضيات" },
            { id: 7, name: "منى خالد", subject: "علوم" },
            { id: 8, name: "محمد سمير", subject: "لغة عربية" },
        ],
        المواد: [
            { id: 1, name: "رياضيات", hours: 6 },
            { id: 2, name: "علوم", hours: 4 },
            { id: 3, name: "لغة عربية", hours: 5 },
            { id: 4, name: "رياضيات", hours: 6 },
            { id: 5, name: "علوم", hours: 4 },
            { id: 6, name: "لغة عربية", hours: 5 },
            { id: 7, name: "رياضيات", hours: 6 },
            { id: 8, name: "علوم", hours: 4 },
            { id: 9, name: "لغة عربية", hours: 5 },
        ],
        الإعدادات: [
            { id: 1, setting: "تغيير كلمة المرور" },
            { id: 2, setting: "إعدادات الحساب" },
            { id: 3, setting: "إشعارات البريد" },
            { id: 4, setting: "تغيير كلمة المرور" },
            { id: 5, setting: "إعدادات الحساب" },
            { id: 6, setting: "إشعارات البريد" },
            { id: 1, setting: "تغيير كلمة المرور" },
            { id: 7, setting: "إعدادات الحساب" },
            { id: 8, setting: "إشعارات البريد" },
        ],
    };
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-gray-100", children: [_jsxs("nav", { className: "bg-cyan-600 text-white p-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold", children: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: () => setShowContact(!showContact), className: "bg-white text-cyan-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition", children: "\u0627\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" }), _jsx("button", { className: "md:hidden text-2xl font-bold", onClick: () => setSidebarOpen(true), children: "\u2630" })] })] }), sidebarOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden", onClick: () => setSidebarOpen(false) })), _jsxs("div", { className: "flex flex-1 relative", children: [_jsx("aside", { className: `w-72 bg-white shadow-md p-6 md:block fixed md:relative top-0 left-0 h-full z-40 transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`, children: _jsx("ul", { className: "space-y-4", children: menuItems.map((item) => (_jsx("li", { className: `cursor-pointer font-semibold p-3 rounded-lg hover:bg-cyan-100 transition ${activeMenu === item ? "bg-cyan-100 text-cyan-700" : ""}`, onClick: () => {
                                    setActiveMenu(item);
                                    setSidebarOpen(false);
                                }, children: item }, item))) }) }), _jsxs("main", { className: "flex-1 p-2 md:p-6", children: [showContact && (_jsxs("div", { className: "fixed top-20 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl p-6 z-50 w-full max-w-md", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" }), _jsx("p", { children: "\uD83D\uDCE7 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A: wardasamy1996.gmail.com" }), _jsx("p", { children: "\uD83D\uDCDE \u0627\u0644\u0647\u0627\u062A\u0641: 01040381899" }), _jsx("p", { children: "\uD83C\uDF10 6th of october" }), _jsx("button", { onClick: () => setShowContact(false), className: "mt-4 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-800 transition", children: "\u0625\u063A\u0644\u0627\u0642" })] })), _jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: activeMenu }), activeMenu === "الرئيسية" && (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 w-full", children: dashboardData["الرئيسية"].map((card) => (_jsxs("div", { className: "bg-white p-4 rounded-2xl shadow hover:shadow-xl transition text-center w-full", children: [_jsx("div", { className: "text-3xl mb-2", children: card.emoji }), _jsx("div", { className: "font-bold text-xl", children: card.value }), _jsx("div", { className: "mt-1", children: card.title })] }, card.id))) })), activeMenu === "الطلاب" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-2 md:p-4 overflow-x-auto w-full", children: _jsxs("table", { className: "min-w-full text-right text-sm md:text-lg", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-cyan-100", children: [_jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0627\u0644\u0627\u0633\u0645" }), _jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0627\u0644\u062F\u0631\u062C\u0629" }), _jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" })] }) }), _jsx("tbody", { children: dashboardData["الطلاب"].map((student) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "px-2 md:px-4 py-2", children: student.name }), _jsx("td", { className: "px-2 md:px-4 py-2", children: student.grade }), _jsx("td", { className: "px-2 md:px-4 py-2", children: student.email })] }, student.id))) })] }) })), activeMenu === "المدرسين" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-2 md:p-4 overflow-x-auto w-full", children: _jsxs("table", { className: "min-w-full text-right text-sm md:text-lg", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-cyan-100", children: [_jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0627\u0644\u0627\u0633\u0645" }), _jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0627\u0644\u0645\u0627\u062F\u0629" })] }) }), _jsx("tbody", { children: dashboardData["المدرسين"].map((teacher) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "px-2 md:px-4 py-2", children: teacher.name }), _jsx("td", { className: "px-2 md:px-4 py-2", children: teacher.subject })] }, teacher.id))) })] }) })), activeMenu === "المواد" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-2 md:p-4 overflow-x-auto w-full", children: _jsxs("table", { className: "min-w-full text-right text-sm md:text-lg", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-cyan-100", children: [_jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0627\u0644\u0645\u0627\u062F\u0629" }), _jsx("th", { className: "px-2 md:px-4 py-2", children: "\u0639\u062F\u062F \u0627\u0644\u0633\u0627\u0639\u0627\u062A" })] }) }), _jsx("tbody", { children: dashboardData["المواد"].map((subject) => (_jsxs("tr", { className: "border-b", children: [_jsx("td", { className: "px-2 md:px-4 py-2", children: subject.name }), _jsx("td", { className: "px-2 md:px-4 py-2", children: subject.hours })] }, subject.id))) })] }) })), activeMenu === "الإعدادات" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-2 md:p-4 w-full", children: _jsx("ul", { className: "space-y-2", children: dashboardData["الإعدادات"].map((setting) => (_jsx("li", { className: "p-2 md:p-3 rounded-lg hover:bg-cyan-100 cursor-pointer", children: setting.setting }, setting.id))) }) }))] })] })] }));
}
