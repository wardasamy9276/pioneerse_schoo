const systemsData = [
  {
    id: 1,
    title: "نظام إدارة التعلم LMS",
    description:
      "يوفر Pioneers E-School نظام متكامل للتعلم الإلكتروني عن بعد من خلال التوصيل والتشغيل لإنشاء بيئة فصل دراسي رقمية.",
    image: "src/assets/systems/learning-management-system.webp",
  },
  {
    id: 2,
    title: "نظام معلومات الطلاب SIS",
    description:
      "نظام معلومات الطلاب (SIS) يساعد المدارس على تنسيق وإدارة المهام الإدارية والتعليمية بين أعضاء هيئة التدريس والإدارة.",
    image: "src/assets/systems/school-management-system.webp",
  },
  {
    id: 3,
    title: "نظام إدارة المدرسة SMS",
    description:
      "Pioneers E-School SMS نظام إداري متكامل يحتوي على كافة الأدوات اللازمة لإدارة المدارس الخاصة والدولية.",
    image: "src/assets/systems/student-information-system.webp",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="items-center px-6 md:px-16 py-6">
        <h1 className="text-3xl text-center font-bold text-cyan-700">
          Pioneers E-School
        </h1>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 py-12 text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-700">
          نظام إدارة المدرسة المثالي لتلبية احتياجات مؤسستك
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          نحن نقدم كل ما تحتاجه لإدارة مؤسسة تعليمية، لتقديم نتائج مضمونة وأفضل،
          ومساعدتك في الانتقال إلى نظام رقمي بالكامل.
        </p>
      </section>

      {/* Features / Systems */}
      <section className="px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {systemsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-contain"
            />
            <div className="p-6 space-y-4 text-right flex flex-col flex-1">
              <h3 className="text-xl font-bold text-cyan-700">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {item.description}
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full text-center px-4 py-2 rounded-xl transition mt-4">
                طلب عرض تجريبي
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-12 text-center text-gray-700">
        &copy; 2026 Pioneers E-School. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
