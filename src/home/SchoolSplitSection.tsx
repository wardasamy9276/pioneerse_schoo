import Imgs from "@/assets/imgLogo/school.webp";
export default function SchoolSplitSection() {
  const points = [
    "إدارة مدرسية إلكترونية متكاملة",
    "متابعة لحظية لأداء الطلاب",
    "تواصل مباشر مع أولياء الأمور",
    "تقارير ونتائج دقيقة",
    "واجهة سهلة الاستخدام",
  ];

  return (
    <section className="py-10 bg-[#0f172a] p-12 text-white w-full" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* النص */}
        <div className="space-y-6 text-right">
          <h2 className="text-3xl font-bold">نظام إدارة مدرسي متكامل</h2>
          <p className="text-gray-300 leading-relaxed">
            نوفر لك منصة ذكية تساعدك على إدارة المدرسة بسهولة وكفاءة مع تحسين
            التواصل بين الإدارة والمعلمين وأولياء الأمور.
          </p>

          <ul className="space-y-3">
            {points.map((item, index) => (
              <a href="/" key={index} className="flex items-start gap-3">
                <span className="text-[#facc15] text-xl">✓</span>
                <span>{item}</span>
              </a>
            ))}
          </ul>
        </div>

        {/* الصورة */}
        <div className="flex justify-center">
          <img
            src={Imgs}
            alt="School System"
            className="rounded-2xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
