export default function SchoolTimeline() {
  const steps = [
    {
      title: "التسجيل",
      desc: "تقديم طلب الالتحاق بالمدرسة إلكترونيًا",
    },
    {
      title: "المقابلة",
      desc: "مقابلة الطالب وولي الأمر",
    },
    {
      title: "القبول",
      desc: "إشعار القبول واستكمال الأوراق",
    },
    {
      title: "بداية الدراسة",
      desc: "انضمام الطالب للعام الدراسي",
    },
  ];

  return (
    <section className="py-12 bg-white text-right" dir="rtl">
      <h2 className="text-2xl font-bold text-center mb-12">
        رحلة الطالب في مدرستنا
      </h2>

      <div className="container mx-auto relative">
        {/* الخط */}
        <div className="absolute right-4 top-0 h-full w-1 bg-[#9E7C2F]" />

        <ul className="space-y-10 pr-12">
          {steps.map((step, index) => (
            <li key={index} className="relative">
              {/* النقطة */}
              <span className="absolute right-[-34px] top-1 w-5 h-5 bg-[#9E7C2F] rounded-full" />

              <h3 className="font-bold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
