import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "ما هو نظام Pioneers E-School SMS؟",
    answer:
      "نظام إداري متكامل لإدارة المدارس الخاصة، يشمل الطلاب، المعلمين، الحضور، الرسائل النصية، والمزيد.",
  },
  {
    id: 2,
    question: "هل يمكن استخدام النظام على الهاتف؟",
    answer:
      "نعم، النظام متوافق مع الأجهزة الذكية ويوفر تطبيقاً للطلاب والمعلمين وأولياء الأمور.",
  },
  {
    id: 3,
    question: "هل البيانات آمنة داخل النظام؟",
    answer:
      "نعم، النظام يعتمد على تخزين سحابي آمن مع بروتوكولات حماية متقدمة لضمان سرية البيانات.",
  },
  {
    id: 4,
    question: "هل يمكن متابعة الحضور والغياب للطلاب؟",
    answer:
      "نعم، النظام يوفر لوحة متابعة الحضور والغياب بشكل لحظي مع إمكانية إرسال تنبيهات للغياب.",
  },
  {
    id: 5,
    question: "هل يمكن إرسال الرسائل النصية من النظام؟",
    answer:
      "نعم، يمكن إرسال الرسائل النصية لأولياء الأمور والمعلمين والطلاب مباشرة من النظام.",
  },
  {
    id: 6,
    question: "هل يدعم النظام إدارة الجداول الدراسية؟",
    answer:
      "نعم، يمكن إنشاء الجداول الدراسية ومتابعة الحصص ومواعيد الامتحانات بكفاءة عالية.",
  },
  {
    id: 7,
    question: "هل يوفر النظام تقارير أداء للطلاب؟",
    answer:
      "نعم، يقدم النظام تقارير مفصلة عن درجات الطلاب وأدائهم الأكاديمي وسلوكهم.",
  },
  {
    id: 8,
    question: "هل يمكن دمج النظام مع برامج المحاسبة؟",
    answer:
      "نعم، يدعم النظام تصدير البيانات والتكامل مع برامج المحاسبة لتسهيل متابعة الرسوم والمدفوعات.",
  },
  {
    id: 9,
    question: "هل يمكن إضافة مستخدمين جدد بسهولة؟",
    answer:
      "نعم، يمكن إنشاء حسابات للمعلمين والطلاب وأولياء الأمور بسرعة مع تحديد الصلاحيات لكل مستخدم.",
  },
  {
    id: 10,
    question: "هل يوجد دعم فني للنظام؟",
    answer:
      "نعم، يتوفر دعم فني مستمر لمساعدة المستخدمين وحل أي مشاكل تقنية تواجههم.",
  },
];

export default function FAQComponent() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="p-6 md:p-12 bg-gray-50" dir="rtl">
      <h2 className="text-3xl font-bold text-center text-[#9E7C2F] mb-8">
        الأسئلة الشائعة
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => toggle(item.id)}
          >
            <h3 className="font-semibold text-lg">{item.question}</h3>
            {openId === item.id && (
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
