import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

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
  const chartOptions = (title: string) => ({
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

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-gray-900 min-h-screen"
      }
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1
            className="
  text-xl 
  sm:text-2xl 
  md:text-3xl 
  font-bold 
  text-center 
  leading-snug
"
          >
            توزيع درجات الطالب
          </h1>

          <h3
            className="
  mt-3
  text-base
  sm:text-lg
  md:text-2xl
  font-bold
  text-center
  leading-relaxed
"
          >
            ساعات المواد الخاصة بكل طالب مع عرض مستوى الطالب
          </h3>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "px-4 py-2 rounded bg-gray-700 text-white"
                : "px-4 py-2 rounded bg-gray-200 text-black"
            }
          >
            {darkMode ? "وضع النهار" : "الوضع الليلي"}
          </button>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <Bar
              data={studentGradesData}
              options={chartOptions("توزيع الطلاب حسب الدرجات")}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <Pie
              data={subjectsHoursData}
              options={chartOptions("ساعات المواد")}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg md:col-span-2">
            <Line
              data={growthData}
              options={chartOptions("نمو الطلاب خلال الأشهر")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
