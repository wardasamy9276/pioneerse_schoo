export default function SchoolWhyUs() {
  const reasons = [
    {
      title: "تعليم حديث",
      desc: "نستخدم أحدث الأساليب التعليمية والتقنيات الذكية",
    },
    {
      title: "كادر تعليمي متميز",
      desc: "معلمون ذوو خبرة عالية وكفاءة",
    },
    {
      title: "متابعة مستمرة",
      desc: "تواصل دائم مع أولياء الأمور",
    },
    {
      title: "بيئة آمنة",
      desc: "نحرص على توفير بيئة تعليمية آمنة ومحفزة",
    },
    {
      title: "أنشطة متنوعة",
      desc: "أنشطة رياضية وثقافية لتنمية شخصية الطالب",
    },
    {
      title: "نظام إداري ذكي",
      desc: "إدارة مدرسية إلكترونية متكاملة",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 text-right" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-8">
        لماذا تختار مدرستنا؟
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2 text-[#9E7C2F]">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
