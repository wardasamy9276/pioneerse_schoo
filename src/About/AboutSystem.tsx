export default function AboutSystem() {
  const highlights = [
    "نظام إدارة المدرسة متكامل وسهل الاستخدام",
    "متابعة لحظية لأداء الطلاب والمعلمين",
    "تواصل مباشر وفعال مع أولياء الأمور",
    "إصدار تقارير دقيقة وسريعة",
    "واجهة حديثة وتصميم جذاب",
  ];

  return (
    <section className="py-20 bg-white text-right" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* النصوص */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#9E7C2F]">عن النظام</h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            نظام إدارة المدرسة هو منصة إلكترونية متكاملة تهدف إلى تسهيل جميع
            العمليات التعليمية والإدارية، وتحسين التواصل بين الإدارة والمعلمين
            وأولياء الأمور.
          </p>

          <ul className="space-y-3 text-gray-700">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#facc15] text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* الصورة */}
        <div className="flex justify-center">
          <img
            src="/school-about.png"
            alt="About School System"
            className="rounded-2xl shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
