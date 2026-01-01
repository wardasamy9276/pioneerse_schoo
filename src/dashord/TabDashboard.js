import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function TabDashboard() {
    const [activeTab, setActiveTab] = useState("الرئيسية");
    // const [showContact, setShowContact] = useState(false);
    const cards = [
        { id: 1, title: "عدد الطلاب", value: 150, emoji: "📊" },
        { id: 2, title: "عدد المدرسين", value: 20, emoji: "👩‍🏫" },
        { id: 3, title: "عدد المواد", value: 25, emoji: "📚" },
        { id: 4, title: "آخر المهام", value: 5, emoji: "📝" },
        { id: 5, title: "الإشعارات", value: 3, emoji: "🔔" },
        { id: 6, title: "الزوار اليوم", value: 45, emoji: "🌐" },
    ];
    const students = [
        { id: 1, name: "أحمد علي", grade: "A", email: "ahmed@example.com" },
        { id: 2, name: "منى سعيد", grade: "B", email: "mona@example.com" },
        { id: 3, name: "محمد حسن", grade: "A", email: "mohamed@example.com" },
    ];
    const teachers = [
        { id: 1, name: "أحمد محمود", subject: "رياضيات" },
        { id: 2, name: "منى خالد", subject: "علوم" },
        { id: 3, name: "محمد سمير", subject: "لغة عربية" },
    ];
    const subjects = [
        { id: 1, name: "رياضيات", hours: 6 },
        { id: 2, name: "علوم", hours: 4 },
        { id: 3, name: "لغة عربية", hours: 5 },
    ];
    const settings = [
        { id: 1, setting: "تغيير كلمة المرور" },
        { id: 2, setting: "إعدادات الحساب" },
        { id: 3, setting: "إشعارات البريد" },
    ];
    const tabs = ["الرئيسية", "الطلاب", "المدرسين", "المواد", "الإعدادات"];
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 p-4 md:p-8", children: [_jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: tabs.map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab), className: `px-4 py-2 rounded-xl font-semibold transition ${activeTab === tab
                        ? "bg-cyan-600 text-white"
                        : "bg-white text-cyan-600 hover:bg-cyan-100"}`, children: tab }, tab))) }), activeTab === "الرئيسية" && (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-6", children: cards.map((card) => (_jsxs("div", { className: "bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center", children: [_jsx("div", { className: "text-4xl mb-2", children: card.emoji }), _jsx("div", { className: "font-bold text-2xl", children: card.value }), _jsx("div", { className: "mt-1 text-lg", children: card.title })] }, card.id))) })), activeTab === "الطلاب" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-4 overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-right", children: [_jsx("thead", { className: "bg-cyan-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2", children: "\u0627\u0644\u0627\u0633\u0645" }), _jsx("th", { className: "px-4 py-2", children: "\u0627\u0644\u062F\u0631\u062C\u0629" }), _jsx("th", { className: "px-4 py-2", children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A" })] }) }), _jsx("tbody", { children: students.map((s) => (_jsxs("tr", { className: "border-b hover:bg-cyan-50 transition", children: [_jsx("td", { className: "px-4 py-2", children: s.name }), _jsx("td", { className: "px-4 py-2", children: s.grade }), _jsx("td", { className: "px-4 py-2", children: s.email })] }, s.id))) })] }) })), activeTab === "المدرسين" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-4 overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-right", children: [_jsx("thead", { className: "bg-cyan-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2", children: "\u0627\u0644\u0627\u0633\u0645" }), _jsx("th", { className: "px-4 py-2", children: "\u0627\u0644\u0645\u0627\u062F\u0629" })] }) }), _jsx("tbody", { children: teachers.map((t) => (_jsxs("tr", { className: "border-b hover:bg-cyan-50 transition", children: [_jsx("td", { className: "px-4 py-2", children: t.name }), _jsx("td", { className: "px-4 py-2", children: t.subject })] }, t.id))) })] }) })), activeTab === "المواد" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-4 overflow-x-auto", children: _jsxs("table", { className: "min-w-full text-right", children: [_jsx("thead", { className: "bg-cyan-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2", children: "\u0627\u0644\u0645\u0627\u062F\u0629" }), _jsx("th", { className: "px-4 py-2", children: "\u0639\u062F\u062F \u0627\u0644\u0633\u0627\u0639\u0627\u062A" })] }) }), _jsx("tbody", { children: subjects.map((sub) => (_jsxs("tr", { className: "border-b hover:bg-cyan-50 transition", children: [_jsx("td", { className: "px-4 py-2", children: sub.name }), _jsx("td", { className: "px-4 py-2", children: sub.hours })] }, sub.id))) })] }) })), activeTab === "الإعدادات" && (_jsx("div", { className: "bg-white shadow-lg rounded-2xl p-4", children: _jsx("ul", { className: "space-y-2", children: settings.map((s) => (_jsx("li", { className: "p-2 rounded-lg hover:bg-cyan-100 cursor-pointer transition", children: s.setting }, s.id))) }) }))] }));
}
