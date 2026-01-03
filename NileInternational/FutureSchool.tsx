import { Link } from "react-router-dom";
import Future from "@/assets/schoolimg/Al-Awael_Private_Schools.webp";
export default function FutureSchool() {
  return (
    <div className="p-6 md:p-12 space-y-8 max-w-5xl mx-auto">
      {/* عنوان المدرسة */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
        مدرسة المستقبل
      </h1>

      {/* صورة المدرسة */}
      <img
        src={Future}
        alt="مدرسة المستقبل"
        className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
      />

      {/* وصف المدرسة */}
      <p className="text-gray-700 text-lg leading-relaxed">
        مدرسة المستقبل هي بيئة تعليمية مبتكرة تهدف لإعداد جيل قادر على مواجهة
        تحديات المستقبل. تركز المدرسة على دمج المناهج الأكاديمية التقليدية مع
        المهارات الرقمية والتفكير النقدي. تقدم برامج تعليمية من الروضة حتى
        الثانوية مع الاهتمام بتطوير شخصية الطالب.
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
            <li>المنهج البريطاني الدولي (IGCSE)</li>
            <li>برامج تعليم رقمي وتقنيات حديثة</li>
            <li>تعليم لغات متعددة: إنجليزي، فرنسي</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الأنشطة والبرامج</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>أنشطة رياضية متنوعة: كرة القدم، كرة السلة، السباحة</li>
            <li>رحلات تعليمية وثقافية</li>
            <li>نوادي علمية، برمجية وفنية</li>
            <li>ورش عمل في التفكير النقدي والابتكار</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الرسوم الدراسية</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>الروضة: 50,000 - 65,000 جنيه سنوياً</li>
            <li>الابتدائية: 65,000 - 85,000 جنيه سنوياً</li>
            <li>الإعدادية: 85,000 - 110,000 جنيه سنوياً</li>
            <li>الثانوية: 110,000 - 140,000 جنيه سنوياً</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition col-span-1 sm:col-span-2">
          <h3 className="font-semibold text-lg">برامج متميزة</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>تطوير المهارات القيادية والإبداعية للطلاب</li>
            <li>برامج STEM و Robotics للابتكار العلمي</li>
            <li>ورش عمل للذكاء الاصطناعي والبرمجة</li>
            <li>مشاريع جماعية لتعزيز العمل الجماعي والتفكير النقدي</li>
          </ul>
        </div>
      </div>

      {/* زر لمزيد من التفاصيل أو التسجيل */}
      <div className="text-center mt-6">
        <Link to={"/TrialOffer"}>
          <button className="px-6 py-3 bg-cyan-700 text-white rounded-xl hover:bg-cyan-900 transition">
            سجل الآن / احصل على عرض تجريبي
          </button>
        </Link>
      </div>
    </div>
  );
}
