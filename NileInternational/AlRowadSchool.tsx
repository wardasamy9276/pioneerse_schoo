import { Link } from "react-router-dom";
import Alrwd from "@/assets/schoolimg/مدرسه_العصر_الاهليه.webp";

export default function AlRowadSchool() {
  return (
    <div className="p-6 md:p-12 space-y-8 max-w-5xl mx-auto">
      {/* عنوان المدرسة */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
        مدرسة الرواد
      </h1>

      {/* صورة المدرسة */}
      <img
        src={Alrwd}
        alt="مدرسة الرواد"
        className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
      />

      {/* وصف المدرسة */}
      <p className="text-gray-700 text-lg leading-relaxed">
        مدرسة الرواد هي بيئة تعليمية متكاملة تهدف لتطوير الطالب أكاديمياً
        وشخصياً، مع التركيز على المناهج الحديثة والأنشطة اللامنهجية والبرامج
        التقنية. تقدم المدرسة برامج تعليمية من الروضة حتى الثانوية.
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
            <li>برامج لغات متقدمة (إنجليزي، فرنسي)</li>
            <li>برامج تفاعلية للعلوم والرياضيات</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الأنشطة والبرامج</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>أنشطة رياضية متنوعة (كرة القدم، كرة السلة، السباحة)</li>
            <li>فنون وموسيقى</li>
            <li>رحلات تعليمية وتفاعلية</li>
            <li>نوادي علمية وتقنية وبرمجية</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg">الرسوم الدراسية</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>الروضة: 45,000 - 60,000 جنيه سنوياً</li>
            <li>الابتدائية: 60,000 - 80,000 جنيه سنوياً</li>
            <li>الإعدادية: 80,000 - 100,000 جنيه سنوياً</li>
            <li>الثانوية: 100,000 - 130,000 جنيه سنوياً</li>
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
