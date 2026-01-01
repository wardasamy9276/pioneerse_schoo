import {
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    "الرئيسية",
    "من نحن",
    "الأخبار",
    "اتصل بنا",
    "خدماتنا",
    "الفعاليات",
    "المعلمون",
    "الطلاب",
    "التقديم",
    "سياسة الخصوصية",
    "الشروط والأحكام",
    "المقالات",
    "المشاريع",
    "التقارير",
    "المدونة",
    "الأنشطة",
    "الاستفسارات",
    "الوظائف",
    "الدعم الفني",
    "اتصل بنا الآن",
  ];

  // تقسيم الـ 20 رابط على 3 أعمدة
  const columns = [[], [], []];
  quickLinks.forEach((link, idx) => {
    columns[idx % 3].push(link);
  });

  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* شعار المدرسة */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="src/assets/imgLogo/school.webp"
            alt="School Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-300 text-sm">
            © 2026 جميع الحقوق محفوظة للمدرسة
          </p>
        </div>

        {/* الأعمدة الثلاثة */}
        <div className="flex w-full justify-between">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col space-y-2">
              {col.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-300 hover:text-[#9E7C2F]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* خط سفلي */}
      <div
        className="mt-8 border-t border-gray-700 pt-4 text-center
      text-gray-400 text-sm "
      >
        جميع الحقوق محفوظة © 2026
      </div>

      <div className="flex flex-col space-y-2  justify-around items-center gap-6:">
        <span className="font-semibold p-6">تابعنا على</span>
        <div className="flex gap-8 mt-2">
          <a href="#" className="hover:text-[#9E7C2F]">
            <FaFacebookF size={30} />
          </a>
          <a href="#" className="hover:text-[#9E7C2F]">
            <FaTelegramPlane size={30} />
          </a>
          <a href="#" className="hover:text-[#9E7C2F]">
            <FaWhatsapp size={30} />
          </a>
          <a href="#" className="hover:text-[#9E7C2F]">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
