export default function SchoolPrograms() {
  const programs = [
    {
      title: "المرحلة الابتدائية",
      desc: "تعليم أساسي متكامل يركز على بناء المهارات",
    },
    {
      title: "المرحلة الإعدادية",
      desc: "تنمية التفكير والتحليل والاستعداد للمرحلة الثانوية",
    },
    {
      title: "المرحلة الثانوية",
      desc: "إعداد أكاديمي قوي للجامعات",
    },
    {
      title: "الأنشطة المدرسية",
      desc: "أنشطة رياضية وفنية وثقافية لتنمية شخصية ومهارات الطالب",
    },
  ];

  return (
    <section className="py-12 bg-white text-right" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-8">البرامج التعليمية</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((item, index) => (
          <div
            key={index}
            className="border p-6 rounded-xl hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
