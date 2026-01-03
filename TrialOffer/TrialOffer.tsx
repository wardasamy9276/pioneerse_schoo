// src/components/TrialOffer.tsx
import { Link } from "react-router-dom";

export default function TrialOffer() {
  return (
    <div
      className="m-8 p-9  border rounded-2xl shadow-lg
     bg-yellow-50 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">
        العرض التجريبي المجاني
      </h2>
      <p className="text-gray-700 mb-2 text-center">
        نقدم لجميع الطلاب المهتمين تجربة مجانية للمدرسة لتجربة البيئة التعليمية
        قبل التسجيل الرسمي. يشمل العرض:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>مدة التجربة: أسبوع كامل (5 أيام دراسية).</li>
        <li>الالتحاق بالحصص التعليمية لجميع المواد الأساسية.</li>
        <li>المشاركة في الأنشطة الرياضية والفنية.</li>
        <li>التعرف على نظام المدرسة والمناهج التعليمية.</li>
        <li>جلسة تعريفية مع المعلمين والإدارة لمناقشة أهداف الطالب.</li>
      </ul>
      <p className="text-gray-700 mb-4 text-center">
        الهدف من التجربة هو تمكين الطالب وولي الأمر من اتخاذ قرار واعٍ ومناسب
        قبل التسجيل الرسمي.
      </p>
      <div className="text-center">
        <Link
          to="/contactCar"
          className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-800 transition"
        >
          احجز العرض التجريبي الآن
        </Link>
      </div>
    </div>
  );
}
