const features = [
  { title: "نظام ذكي", desc: "إدارة كاملة للطلاب والمعلمين" },
  { title: "متابعة أولياء الأمور", desc: "تقارير فورية" },
  { title: "أمان عالي", desc: "حماية بيانات المدرسة" },
  { title: "سهولة الاستخدام", desc: "واجهة بسيطة وسريعة" },
];

export default function SchoolFeatures() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">مميزات المدرسة</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
