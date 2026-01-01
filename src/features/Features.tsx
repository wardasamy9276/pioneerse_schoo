import LoingFeatures from "../features/Loing-Features";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import LoginInfoSection from "../home/LoginInfoSection";

// بيانات التواصل
const contactData = {
  mainLinks: [
    { title: "الرئيسية", url: "/" },
    { title: "تواصل معنا", url: "/contact" },
  ],
  sections: [
    {
      title: "تواصل معنا",
      info: [
        { type: "أرقام المبيعات", contacts: ["201040381899"] },
        {
          type: "أرقام الدعم الفني",
          contacts: ["201040381899", "201040381899", "201040381899"],
        },
        { type: "البريد الإلكتروني", contacts: ["ward.com"] },
        {
          type: "أرقام الإدارة",
          contacts: [
            "+201040381899",
            "+201040381899",
            "+201040381899",
            "+201040381899",
          ],
        },
        {
          type: "مواعيد العمل",
          contacts: [
            "   من الأحد إلى الخميس، من 10 صباحًا إلى 6 مساءً بتوقيت القاهره",
          ],
        },
      ],
    },
  ],
};

export default function ContactInfo() {
  return (
    <div className="p-10 gap-7">
      <h2 className="text-cyan-700 text-center font-bold text-[30px]">
        تواصل معنا{" "}
      </h2>
      <p className="text-cyan-900 text-center font-bold text-[30px]">
        زورو موقعنا الاكتروني{" "}
      </p>
      <div
        className="p-6 md:p-10 flex flex-col md:flex-row md:justify-between gap-10"
        dir="rtl"
      >
        {/* بيانات التواصل */}
        <div className="flex-1 space-y-8 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-right">
          {contactData.sections.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#9E7C2F] mb-6">
                {section.title}
              </h2>

              {section.info.map((info, iIdx) => (
                <div
                  key={iIdx}
                  className="flex flex-col md:flex-row md:items-start gap-4 mb-6"
                >
                  {/* أيقونة */}
                  <div className="text-[#9E7C2F] text-2xl md:text-xl min-w-[40px]">
                    {info.type.includes("أرقام") && <FaPhone />}
                    {info.type.includes("البريد") && <FaEnvelope />}
                    {info.type.includes("مواعيد") && <FaClock />}
                  </div>

                  {/* البيانات */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg md:text-xl mb-2">
                      {info.type}
                    </h3>
                    <ul className="list-none list-inside text-gray-700 space-y-1">
                      {info.contacts.map((contact, cIdx) => (
                        <li
                          className="hover:text-blue-700 transition-colors"
                          key={cIdx}
                        >
                          {contact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <LoingFeatures />
        </div>
      </div>
      <LoginInfoSection />
    </div>
  );
}
