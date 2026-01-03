import { Link } from "react-router-dom";
import imgse from "@/assets/schoolimg/Knights-of-learning-schools.webp";
export default function AlAmalSchool() {
  return (
    <div className="p-6 md:p-12 space-y-8 max-w-5xl mx-auto">
      {/* عنوان المدرسة */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700">
        مدرسة الأمل
      </h1>

      {/* صورة المدرسة */}
      <img
        src={imgse}
        alt="مدرسة الأمل"
        className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
      />

      {/* وصف المدرسة */}
      <p className="text-gray-700 text-lg leading-relaxed">
        مدرسة الأمل تسعى لتقديم تعليم شامل ومتوازن يركز على تطوير شخصية الطالب
        من جميع النواحي الأكاديمية والاجتماعية والثقافية. المدرسة تهدف لتنشئة
        جيل متعلم، مبدع، وملتزم بالقيم والأخلاق.
      </p>

      {/* معلومات أساسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">المراحل التعليمية</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>الروضة</li>
            <li>المرحلة الابتدائية</li>
            <li>المرحلة الإعدادية</li>
            <li>المرحلة الثانوية</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">المناهج الدراسية</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>المنهج المصري الرسمي</li>
            <li>المنهج الدولي IB أو IGCSE (حسب الفئة)</li>
            <li>تعليم لغات متعددة: إنجليزي، فرنسي</li>
            <li>برامج تعليم رقمي وتقنيات حديثة</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الأنشطة والبرامج</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>أنشطة رياضية متنوعة: كرة قدم، كرة سلة، سباحة</li>
            <li>نوادي علمية، فنية، وبرمجية</li>
            <li>رحلات تعليمية وثقافية داخل وخارج المدرسة</li>
            <li>ورش عمل لتنمية المهارات الإبداعية والاجتماعية</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الرسوم الدراسية</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>الروضة: 40,000 - 55,000 جنيه سنوياً</li>
            <li>الابتدائية: 55,000 - 70,000 جنيه سنوياً</li>
            <li>الإعدادية: 70,000 - 90,000 جنيه سنوياً</li>
            <li>الثانوية: 90,000 - 120,000 جنيه سنوياً</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition col-span-1 sm:col-span-2">
          <h3 className="font-semibold text-lg">برامج متميزة</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>تطوير مهارات القيادة والإبداع لدى الطلاب</li>
            <li>برامج STEM وتعليم البرمجة والروبوتات</li>
            <li>ورش عمل للذكاء الاصطناعي والابتكار</li>
            <li>مشاريع جماعية لتعزيز العمل الجماعي وحل المشكلات</li>
          </ul>
        </div>
      </div>

      {/* زر لمزيد من التفاصيل أو التسجيل */}
      <div className="text-center mt-6">
        <Link to={"/trialOffer"}>
          <button className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-900 transition">
            سجل الآن / احصل على عرض تجريبي
          </button>
        </Link>
      </div>
    </div>
  );
}
