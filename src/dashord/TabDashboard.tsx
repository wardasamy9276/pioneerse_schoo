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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              activeTab === tab
                ? "bg-cyan-600 text-white"
                : "bg-white text-cyan-600 hover:bg-cyan-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Content */}
      {activeTab === "الرئيسية" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-2">{card.emoji}</div>
              <div className="font-bold text-2xl">{card.value}</div>
              <div className="mt-1 text-lg">{card.title}</div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "الطلاب" && (
        <div className="bg-white shadow-lg rounded-2xl p-4 overflow-x-auto">
          <table className="min-w-full text-right">
            <thead className="bg-cyan-100">
              <tr>
                <th className="px-4 py-2">الاسم</th>
                <th className="px-4 py-2">الدرجة</th>
                <th className="px-4 py-2">البريد الإلكتروني</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-b hover:bg-cyan-50 transition">
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">{s.grade}</td>
                  <td className="px-4 py-2">{s.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "المدرسين" && (
        <div className="bg-white shadow-lg rounded-2xl p-4 overflow-x-auto">
          <table className="min-w-full text-right">
            <thead className="bg-cyan-100">
              <tr>
                <th className="px-4 py-2">الاسم</th>
                <th className="px-4 py-2">المادة</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.id} className="border-b hover:bg-cyan-50 transition">
                  <td className="px-4 py-2">{t.name}</td>
                  <td className="px-4 py-2">{t.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "المواد" && (
        <div className="bg-white shadow-lg rounded-2xl p-4 overflow-x-auto">
          <table className="min-w-full text-right">
            <thead className="bg-cyan-100">
              <tr>
                <th className="px-4 py-2">المادة</th>
                <th className="px-4 py-2">عدد الساعات</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((sub) => (
                <tr
                  key={sub.id}
                  className="border-b hover:bg-cyan-50 transition"
                >
                  <td className="px-4 py-2">{sub.name}</td>
                  <td className="px-4 py-2">{sub.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "الإعدادات" && (
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <ul className="space-y-2">
            {settings.map((s) => (
              <li
                key={s.id}
                className="p-2 rounded-lg hover:bg-cyan-100 cursor-pointer transition"
              >
                {s.setting}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
