import { useState } from "react";

export default function SchoolFeatures() {
  const [showCard, setShowCard] = useState(false);

  // مثال على بيانات المميزات
  const features = [
    "منهج متطور",
    "معلمين مؤهلين",
    "أنشطة رياضية وثقافية",
    "بيئة تعليمية آمنة",
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setShowCard(!showCard)}
          className="bg-[#9E7C2F] text-white px-6 py-3
           rounded-xl shadow-lg hover:bg-[#7d6224] transition"
        >
          عرض مميزات المدرسة
        </button>
      </div>

      {/* الكارت */}
      {showCard && (
        <div
          className="fixed bottom-20 right-4 bg-[#c59b3a] p-6 rounded-xl
         shadow-xl w-80 h-[400px] border border-gray-200 flex flex-col text-center justify-center items-center"
        >
          <h3 className="text-xl font-bold mb-3 text-black">مميزات المدرسة</h3>
          <ul className="list-disc list-inside space-y-1 list-none">
            {features.map((feature, idx) => (
              <li className="" key={idx}>
                {feature}
              </li>
            ))}
          </ul>

          {/* زرار اغلاق */}
          <button
            onClick={() => setShowCard(false)}
            className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
}
