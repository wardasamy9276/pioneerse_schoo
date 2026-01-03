import imgKnights from "@/assets/schoolimg/Knights-of-learning-schools.webp";
import imgNoor from "@/assets/schoolimg/نور_الايمان_العالميه.webp";
import imgNawabigh from "@/assets/schoolimg/مدرسه_نوابغ_العلم_العالميه.webp";
import imgSmart from "@/assets/schoolimg/مدرسه_سمارت_للغات.webp";
import imgWinchester from "@/assets/schoolimg/Winchester_British_International_School.webp";
import imgOrouba from "@/assets/schoolimg/Orouba_Language_School_Maadi.webp";
import imgRepton from "@/assets/schoolimg/Repton_Cairo_School.webp";
import imgSeven from "@/assets/schoolimg/seven-Pillars-International-School.webp";
import imgMAC from "@/assets/schoolimg/Misr_American_College_MAC.webp";
import imgShams from "@/assets/schoolimg/el-shams-private-school.webp";

// 📝 الداتا (زي ما هي)
const smsData = [
  {
    id: 1,
    title: "نظام إدارة المدرسة SMS",
    description:
      "Pioneers E-School SMS نظام إداري متكامل يحتوي على كافة الأدوات اللازمة لإدارة المدارس الخاصة، الطلاب...",
    img: imgKnights,
  },
  {
    id: 2,
    title: "إدارة حضور الطلاب",
    description:
      "تابع حضور الطلاب بشكل إلكتروني دون الحاجة للأوراق التقليدية، وسجّل كل البيانات بدقة.",
    img: imgNoor,
  },
  {
    id: 3,
    title: "نظام الرسائل النصية",
    description:
      "أرسل رسائل SMS لأولياء الأمور بسرعة وفعالية لتنبيههم بكل جديد في المدرسة.",
    img: imgNawabigh,
  },
  {
    id: 4,
    title: "إدارة المخزون المدرسي",
    description:
      "تابع كل المخازن والأصناف إلكترونيًا لتسهيل العمليات اليومية والإدارية.",
    img: imgSmart,
  },
  {
    id: 5,
    title: "التحصيل المالي للمدرسة",
    description:
      "راقب الرسوم الدراسية والفواتير إلكترونيًا وقلّل من الأخطاء اليدوية.",
    img: imgWinchester,
  },
  {
    id: 6,
    title: "نظام إدارة المكتبة",
    description:
      "أتمتة عمليات المكتبة بالكامل: متابعة الكتب، الإعارة، والعائدات.",
    img: imgOrouba,
  },
  {
    id: 7,
    title: "بوابة الطلاب",
    description:
      "تمكّن الطلاب من متابعة جداولهم ودرجاتهم بكل سهولة من أي مكان.",
    img: imgRepton,
  },
  {
    id: 8,
    title: "تقارير أداء المدرسة",
    description:
      "احصل على تقارير دقيقة لجميع بيانات المدرسة لتحسين الأداء الإداري.",
    img: imgSeven,
  },
  {
    id: 9,
    title: "إدارة الحافلات المدرسية",
    description: "نظم مسارات الحافلات ومتابعة الطلاب لضمان النقل الآمن.",
    img: imgSeven,
  },
  {
    id: 10,
    title: "إدارة العيادة المدرسية",
    description: "تابع جميع الحالات الطبية واللقاحات داخل المدرسة بسهولة.",
    img: imgMAC,
  },
  {
    id: 11,
    title: "إدارة الكنترول المدرسي",
    description:
      "نظم الامتحانات والدرجات إلكترونيًا لتوفير الوقت وتقليل الأخطاء.",
    img: imgKnights,
  },
  {
    id: 12,
    title: "نظام إدارة الموارد البشرية HRMS",
    description: "إدارة بيانات الموظفين وسياسات المدرسة بسهولة وكفاءة.",
    img: imgKnights,
  },
  {
    id: 13,
    title: "نظام إدارة التعلم LMS",
    description:
      "نظام متكامل لإدارة المحتوى التعليمي والاختبارات عبر الإنترنت.",
    img: imgMAC,
  },
  {
    id: 14,
    title: "إدارة البيانات المالية",
    description: "تحكم كامل في حسابات المدرسة والفواتير والرسوم الدراسية.",
    img: imgShams,
  },
  {
    id: 15,
    title: "تطبيق المدرسة الذكي",
    description:
      "تطبيق إلكتروني يربط الطلاب والمعلمين وأولياء الأمور في منصة واحدة.",
    img: imgSmart,
  },
];

export default function SMSCards() {
  return (
    <div className="p-6 md:p-12 bg-gray-50" dir="rtl">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#9E7C2F]">
        مميزات نظام SMS
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {smsData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-32 object-contain"
              />
            </div>

            <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>

            <p className="text-gray-700 text-sm text-center">
              {item.description}
            </p>

            <div className="mt-4 flex justify-center">
              <button className="px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-900 transition">
                اقرأ المزيد
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
