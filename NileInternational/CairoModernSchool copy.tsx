import { Link } from "react-router-dom";
import Cairo from "@/assets/schoolimg/Al-Awael_Private_Schools.webp";
export default function CairoModernSchool() {
  return (
    <div className="p-6 md:p-12 space-y-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
        مدرسة القاهرة الحديثة
      </h1>

      <img
        src={Cairo}
        alt="مدرسة القاهرة الحديثة"
        className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
      />

      {/* وصف المدرسة */}
      <p className="text-gray-700 text-lg leading-relaxed">
        مدرسة القاهرة الحديثة تقدم بيئة تعليمية متكاملة للطلاب من جميع الأعمار،
        مع التركيز على الأكاديميات العالمية والتطوير الشخصي والمهارات العملية.
        تقدم المدرسة برامج تعليمية حديثة من الروضة حتى المرحلة الثانوية.
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
            <li>المنهج المصري المعتمد</li>
            <li>المنهج البريطاني الدولي (IGCSE)</li>
            <li>اللغة الإنجليزية كلغة أساسية للتدريس</li>
            <li>برامج تفاعلية للعلوم والرياضيات</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الأنشطة والبرامج</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>أنشطة رياضية متنوعة (كرة القدم، السباحة، كرة السلة)</li>
            <li>موسيقى وفنون</li>
            <li>رحلات تعليمية خارجية</li>
            <li>نوادي علمية وبرمجية</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الرسوم الدراسية</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>الروضة: 50,000 - 70,000 جنيه سنوياً</li>
            <li>الابتدائية: 70,000 - 90,000 جنيه سنوياً</li>
            <li>الإعدادية: 90,000 - 120,000 جنيه سنوياً</li>
            <li>الثانوية: 120,000 - 150,000 جنيه سنوياً</li>
          </ul>
        </div>
      </div>

      {/* زر لمزيد من التفاصيل أو التسجيل */}
      <div className="text-center mt-6">
        <Link to={"/trialOffer"}>
          <button className="px-6 py-3 bg-cyan-700 text-white rounded-xl hover:bg-cyan-900 transition">
            سجل الآن / احصل على عرض تجريبي
          </button>
        </Link>
      </div>
    </div>
  );
}
