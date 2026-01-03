import { Link } from "react-router-dom";
import Nile from "@/assets/schoolimg/Al-Awael_Private_Schools.webp";
export default function NileInternational() {
  return (
    <div className="p-6 md:p-12 space-y-8 max-w-5xl mx-auto">
      {/* عنوان المدرسة */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700">
        مدرسة النيل الدولية
      </h1>

      {/* صورة المدرسة */}
      <img
        src={Nile}
        alt="مدرسة النيل الدولية"
        className="w-full max-w-1xl mx-auto rounded-2xl shadow-lg"
      />

      {/* وصف عام */}
      <p className="text-gray-700 text-lg leading-relaxed">
        مدرسة النيل الدولية تقدم نظام تعليمي متكامل يعتمد على المناهج العالمية
        مع التركيز على تنمية المهارات الأكاديمية، الاجتماعية، والإبداعية للطلاب.
        تشمل المدرسة أنشطة متنوعة وبرامج تدريبية لدعم التفكير النقدي والابتكار.
      </p>

      {/* المراحل التعليمية */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-600">المراحل التعليمية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">المرحلة الابتدائية</h3>
            <p className="text-gray-700">
              تركز على بناء أساسيات القراءة، الكتابة، الحساب، وتعزيز القيم
              الاجتماعية والاعتماد على المشاريع التعليمية الممتعة والتفاعلية.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">المرحلة الإعدادية</h3>
            <p className="text-gray-700">
              تعليم منظم في المواد العلمية والإنسانية مع برامج تعليمية داعمة
              للمهارات التقنية والتواصلية، إضافة إلى أنشطة رياضية وفنية متنوعة.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">المرحلة الثانوية</h3>
            <p className="text-gray-700">
              برامج متقدمة تركز على الإعداد للجامعات الدولية والمحلية، مع توجيه
              أكاديمي وشخصي لكل طالب لدعم اختيار التخصص المناسب.
            </p>
          </div>
        </div>
      </div>

      {/* المناهج التعليمية */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-3">
          المناهج التعليمية
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>المنهج الدولي IB للابتدائية والثانوية.</li>
          <li>المنهج المصري المكمل لتعزيز الثقافة المحلية.</li>
          <li>برامج لغات متعددة: إنجليزي، فرنسي، عربي.</li>
          <li>دروس دعم وتقوية في المواد العلمية.</li>
        </ul>
      </div>

      {/* الأنشطة والنوادي */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-3">
          الأنشطة والنوادي
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>نادي الروبوتات والبرمجة.</li>
          <li>الأنشطة الرياضية: كرة القدم، السباحة، كرة السلة.</li>
          <li>نادي الفن والموسيقى والمسرح.</li>
          <li>رحلات تعليمية داخل وخارج المدرسة.</li>
        </ul>
      </div>

      {/* الرسوم الدراسية */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600 mb-3">
          الرسوم الدراسية
        </h2>
        <p className="text-gray-700">
          تختلف الرسوم حسب المرحلة الدراسية والبرنامج المختار، ويمكن التواصل مع
          الإدارة لمعرفة التفاصيل الدقيقة أو طلب عرض تجريبي مجاني.
        </p>
      </div>

      {/* زر للتواصل أو التفاصيل */}
      <div className="text-center mt-6">
        <Link
          to="/trialOffer"
          className="inline-block px-6 py-3 bg-cyan-700 text-white font-semibold rounded-xl hover:bg-cyan-900 transition"
        >
          تواصل معنا لعرض تجريبي
        </Link>
      </div>
    </div>
  );
}
