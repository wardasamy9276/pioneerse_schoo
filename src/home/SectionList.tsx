import platformData from "./components/Data Structure";
import { Button } from "@/components/ui/button";
import Icon from "../home/components/iconsList";

import { Link } from "react-router-dom";
export default function SectionList() {
  return (
    <div
      className="
      px-4 md:px-12 lg:px-20 py-8 space-y-12
      flex flex-col items-center gap-4"
      dir="rtl"
    >
      {/* الهيدر */}

      <div className="flex flex-col items-center justify-center text-center gap-5">
        <Link to={"/customers"}>
          <Button
            className="
          hidden md:inline-flex
          text-white bg-[#9E7C2F] hover:bg-cyan-900
          px-6 py-3 rounded-2xl text-center"
          >
            طلب عرض تجريبي سريع
          </Button>
        </Link>

        <span className="text-lg md:text-xl font-semibold">
          ميزات منصة نظام إدارة التعلم LMS
        </span>

        <p
          className="
          text-gray-700 leading-relaxed
          text-sm md:text-base max-w-3xl"
        >
          <span className="text-3xl md:text-4xl text-[#9e7c2f] font-bold ml-2">
            LMS
          </span>
          تم تصميمه من خلال مراعاة احتياجات مشاركة المحتوى السريعة والمنظمة التي
          توفر المستوى التالي من الكفاءة والخبرة الإنتاجية للمعلمين، إنها منصة
          مدمجة حيث يصبح إجراء الفصول الحية فعالاً إلى جانب مشاركة المحتوى، مع
          وجود آلية متكاملة لتحديد الدرجات وإعداد التقارير.
        </p>
      </div>

      {/* الصورة */}
      <img
        src="src/assets/imgLogo/school.webp"
        alt="School"
        className="w-full rounded-xl"
      />

      {/* الأقسام */}
      {platformData.map((section, idx) => (
        <div key={idx} className="w-full space-y-3">
          <h2 className="text-lg md:text-2xl font-bold text-2xl[] text-right text-[#9E7C2F] ">
            {idx + 1}. {section.section}
          </h2>

          {section.description && (
            <p className="text-gray-700 text-sm md:text-base text-right">
              {section.description}
            </p>
          )}

          {section.features && (
            <ul
              className="
              list-decimal list-outside pl-6
              text-gray-800 text-sm md:text-base
              space-y-1"
            >
              {section.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.accounts &&
            section.accounts.map((account, aIdx) => (
              <div key={aIdx} className="mr-2 md:mr-6">
                <h3 className="text-base md:text-lg font-semibold text-cyan-600 text-right">
                  {account.type}
                </h3>

                <ul
                  className="
                  list-decimal list-outside pl-6
                  text-gray-800 text-sm md:text-base
                  space-y-1"
                >
                  {account.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}

          {section.action && (
            <Button
              className="
              mt-4 text-white bg-cyan-700 hover:bg-cyan-900
              px-6 py-3 rounded-2xl w-full md:w-auto"
            >
              {section.action}
            </Button>
          )}
        </div>
      ))}

      {/* أيقونات السوشيال */}
      <div
        className="
        w-full flex justify-center items-center p-3
        gap-5 pt-6 border-b"
      >
        <Icon />
      </div>
    </div>
  );
}
