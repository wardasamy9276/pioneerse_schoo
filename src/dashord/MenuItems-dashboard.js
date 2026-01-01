import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);
export default function GraphDashboard() {
    const [darkMode, setDarkMode] = useState(false);
    // بيانات تجريبية
    const students = [
        { name: "أحمد علي", grade: "A" },
        { name: "منى سعيد", grade: "B" },
        { name: "محمد حسن", grade: "A" },
        { name: "سارة جمال", grade: "C" },
        { name: "علي سامي", grade: "B" },
    ];
    const subjects = [
        { name: "رياضيات", hours: 6 },
        { name: "علوم", hours: 4 },
        { name: "لغة عربية", hours: 5 },
        { name: "لغة إنجليزية", hours: 3 },
    ];
    // Chart Data
    const studentGradesData = {
        labels: ["A", "B", "C", "D"],
        datasets: [
            {
                label: "عدد الطلاب",
                data: [
                    students.filter((s) => s.grade === "A").length,
                    students.filter((s) => s.grade === "B").length,
                    students.filter((s) => s.grade === "C").length,
                    students.filter((s) => s.grade === "D").length,
                ],
                backgroundColor: ["#0ea5e9", "#34d399", "#facc15", "#f87171"],
            },
        ],
    };
    const subjectsHoursData = {
        labels: subjects.map((s) => s.name),
        datasets: [
            {
                label: "عدد الساعات",
                data: subjects.map((s) => s.hours),
                backgroundColor: ["#f97316", "#0ea5e9", "#34d399", "#f43f5e"],
            },
        ],
    };
    const growthData = {
        labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو"],
        datasets: [
            {
                label: "نمو الطلاب",
                data: [10, 15, 20, 25, 30],
                borderColor: darkMode ? "#34d399" : "#0ea5e9",
                backgroundColor: darkMode ? "#34d39950" : "#0ea5e980",
                tension: 0.4,
            },
        ],
    };
    // ألوان الرسم البياني حسب الوضع الليلي والنهار
    const chartOptions = (title) => ({
        responsive: true,
        plugins: {
            legend: {
                labels: { color: darkMode ? "#fff" : "#000" },
            },
            title: {
                display: true,
                text: title,
                color: darkMode ? "#fff" : "#000",
                font: { size: 18, weight: "bold" },
            },
        },
        scales: {
            x: { ticks: { color: darkMode ? "#fff" : "#000" } },
            y: { ticks: { color: darkMode ? "#fff" : "#000" } },
        },
    });
    return (_jsx("div", { className: darkMode
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-gray-100 text-gray-900 min-h-screen", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h1", { className: "\r\n  text-xl \r\n  sm:text-2xl \r\n  md:text-3xl \r\n  font-bold \r\n  text-center \r\n  leading-snug\r\n", children: "\u062A\u0648\u0632\u064A\u0639 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0627\u0644\u0628" }), _jsx("h3", { className: "\r\n  mt-3\r\n  text-base\r\n  sm:text-lg\r\n  md:text-2xl\r\n  font-bold\r\n  text-center\r\n  leading-relaxed\r\n", children: "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643\u0644 \u0637\u0627\u0644\u0628 \u0645\u0639 \u0639\u0631\u0636 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0637\u0627\u0644\u0628" }), _jsx("button", { onClick: () => setDarkMode(!darkMode), className: darkMode
                                ? "px-4 py-2 rounded bg-gray-700 text-white"
                                : "px-4 py-2 rounded bg-gray-200 text-black", children: darkMode ? "وضع النهار" : "الوضع الليلي" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg", children: _jsx(Bar, { data: studentGradesData, options: chartOptions("توزيع الطلاب حسب الدرجات") }) }), _jsx("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg", children: _jsx(Pie, { data: subjectsHoursData, options: chartOptions("ساعات المواد") }) }), _jsx("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg md:col-span-2", children: _jsx(Line, { data: growthData, options: chartOptions("نمو الطلاب خلال الأشهر") }) })] })] }) }));
}
