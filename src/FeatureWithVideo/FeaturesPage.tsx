export default function FeaturesPage() {
  const features = [
    {
      id: 1,
      icon: "🏫",
      title: "نظام إدارة المدرسة المثالي لتلبية احتياجات مؤسستك",
      description:
        "نحن نقدم كل ما تحتاجه لإدارة مؤسسة تعليمية، لتقديم نتائج مضمونة وأفضل، ومساعدتك في الانتقال إلى نظام رقمي بالكامل.",
    },
    {
      id: 2,
      icon: "🚀",
      title: "ميزات قوية لمؤسستك",
      description:
        "نوفر أدوات متكاملة لإدارة الطلاب، المعلمين، الفصول، والعمليات اليومية بكفاءة عالية.",
    },
    {
      id: 3,
      icon: "💬",
      title: "منصة تواصل قوية",
      description:
        "حافظ على التواصل المستمر مع أولياء الأمور وزيادة مشاركة الطلاب مع المعلمين من خلال نظام تواصل ذكي وفعال.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      {/* عنوان السكشن */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-800 mb-4">
          ميزات قوية لمؤسستك
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          نظام متكامل لإدارة المؤسسات التعليمية ومساعدتك على التحول الرقمي
          الكامل.
        </p>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4 hover:shadow-xl transition"
          >
            <div className="text-6xl">{item.icon}</div>

            <h3 className="text-2xl font-bold text-cyan-700">{item.title}</h3>

            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
