import { useState } from "react";
import { useNavigate } from "react-router-dom";
import school1 from "@/assets/schoolimg/Al-Awael_Private_Schools.webp";
import school2 from "@/assets/schoolimg/Winchester_British_International_School.webp";
import school3 from "@/assets/schoolimg/مدرسه_العصر_الاهليه.webp";

const schools = [
  {
    name: "مدرسة النيل الدولية",
    image: school1,
    link: "/nileInternational",
    description: "نظام تعليمي متكامل مع أنشطة متعددة لتطوير مهارات الطلاب.",
  },
  {
    name: "مدرسة القاهرة الحديثة",
    image: school2,
    link: "/cairoModernSchool",
    description:
      "تقدم برامج تعليمية حديثة ومناهج عالمية للطلاب من جميع الأعمار.",
  },
  {
    name: "مدرسة الرواد",
    image: school3,
    link: "/alRowadSchool",
    description:
      "تركز على التعليم الأكاديمي والمهارات العملية والتقنية للطلاب.",
  },
  {
    name: "مدرسة المستقبل",
    image: school1,
    link: "/futureSchool",
    description: "بيئة تعليمية مبتكرة لدعم التفكير النقدي والإبداع.",
  },
  {
    name: "مدرسة الأمل",
    image: school2,
    link: "/alAmalSchool",
    description:
      "برامج تعليمية شاملة مع التركيز على القيم والتربية الاجتماعية.",
  },
];

export default function SchoolsPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        مدارسنا
      </h1>

      <div className="space-y-4">
        {schools.map((school, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-xl overflow-hidden shadow-sm"
          >
            <div
              className="flex items-center gap-4 p-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              onClick={() => toggleAccordion(idx)}
            >
              <img
                src={school.image}
                alt={school.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <span className="text-lg font-medium">{school.name}</span>
            </div>

            {/* Accordion content */}
            {openIndex === idx && (
              <div className="p-4 bg-white border-t border-gray-200">
                <p className="text-gray-700">{school.description}</p>
                <button
                  className="mt-3 px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-900 transition"
                  onClick={() => navigate(school.link)}
                >
                  عرض التفاصيل
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
