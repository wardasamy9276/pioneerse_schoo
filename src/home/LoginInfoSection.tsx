import DemoModal from "../Category/DemoModal";

export default function LoginInfoSection() {
  const info = [
    "استخدمي البريد الإلكتروني المسجل في المدرسة",
    "كلمة المرور حساسة لحالة الأحرف",
    "في حال نسيان كلمة المرور، اضغطي على (نسيت كلمة المرور)",
    "لو عندك مشكلة في الدخول، تواصلي مع الإدارة",
  ];

  return (
    <div className="flex flex-col p-9 items-end w-full gap-11">
      <div className="bg-gray-50 p-6 rounded-2xl text-right" dir="rtl">
        <h3 className="font-bold text-lg mb-4">إرشادات تسجيل الدخول</h3>

        <ul className="space-y-3 text-sm text-gray-600">
          {info.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-[#9E7C2F]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <DemoModal />
    </div>
  );
}
