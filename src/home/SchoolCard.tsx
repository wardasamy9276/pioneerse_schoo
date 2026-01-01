import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SmallSchoolSlider() {
  const schools = [
    // مصر
    {
      name: "مدرسة النيل الدولية",
      image: "src/assets/schoolimg/Al-Awael_Private_Schools.webp",
    },
    {
      name: "مدرسة القاهرة الحديثة",
      image: "src/assets/schoolimg/Al-Madina_Language_Schools.webp",
    },
    {
      name: "مدرسة الرواد",
      image: "src/assets/schoolimg/capital_gate_semi_international_school.webp",
    },
    {
      name: "مدرسة المستقبل",
      image: "src/assets/schoolimg/el-shams-private-school.webp",
    },
    {
      name: "مدرسة الأمل",
      image: "src/assets/schoolimg/Knights-of-learning-schools.webp",
    },

    // السعودية
    {
      name: "مدارس الظهران الأهلية",
      image: "src/assets/schoolimg/middle_east_international_schools.webp",
    },
    {
      name: "مدارس الرياض الأهلية",
      image: "src/assets/schoolimg/middle_east_international_schools.webp",
    },
    {
      name: "مدارس المستقبل الدولية",
      image: "src/assets/schoolimg/new_capital_school.webp",
    },
    {
      name: "مدارس الأهلي",
      image: "src/assets/schoolimg/new_capital_school.webp",
    },
    {
      name: "مدارس السلام",
      image: "src/assets/schoolimg/Norwich_international_college.webp",
    },

    // الإمارات
    {
      name: "مدرسة جيمس الدولية",
      image: "src/assets/schoolimg/Orouba_Language_School_Maadi.webp",
    },
    {
      name: "مدرسة الإمارات الوطنية",
      image:
        "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_Heliopolis.webp",
    },
    {
      name: "مدرسة دبي الدولية",
      image:
        "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
    },
    {
      name: "مدرسة أبوظبي الحديثة",
      image: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },
    {
      name: "مدرسة الخليج الدولية",
      image: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },

    // الكويت
    {
      name: "مدارس الكويت الوطنية",
      image: "src/assets/schoolimg/مدرسه_العصر_الاهليه.webp",
    },
    {
      name: "مدرسة الجزيرة",
      image: "src/assets/schoolimg/نور_الايمان_العالميه.webp",
    },
    {
      name: "مدرسة الإبداع",
      image: "src/assets/schoolimg/نور_الايمان_العالميه.webp",
    },
    {
      name: "مدرسة الرواد",
      image: "src/assets/schoolimg/مدرسه_سمارت_للغات.webp",
    },
    {
      name: "مدرسة الحكمة",
      image: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },

    // قطر
    {
      name: "مدارس الدوحة الحديثة",
      image: "src/assets/schoolimg/Orouba_Language_School_Maadi.webp",
    },
    {
      name: "مدرسة الراشد",
      image: "src/assets/schoolimg/Orouba_Language_School_Maadi.webp",
    },
    {
      name: "مدرسة النور الدولية",
      image: "src/assets/schoolimg/new_capital_school.webp",
    },
    {
      name: "مدارس المستقبل",
      image: "src/assets/schoolimg/new_capital_school.webp",
    },
    {
      name: "مدارس الشمال",
      image: "src/assets/schoolimg/middle_east_international_schools.webp",
    },

    // الأردن
    {
      name: "مدارس عمان الأهلية",
      image: "src/assets/schoolimg/Al-Awael_Private_Schools.webp",
    },
    {
      name: "مدرسة الرواد الدولية",
      image: "src/assets/schoolimg/Al-Madina_Language_Schools.webp",
    },
    {
      name: "مدرسة الملكة رانيا",
      image: "src/assets/schoolimg/capital_gate_semi_international_school.webp",
    },
    {
      name: "مدرسة المستقبل",
      image: "src/assets/schoolimg/Knights-of-learning-schools.webp",
    },
    {
      name: "مدرسة الأمل",
      image: "src/assets/schoolimg/middle_east_international_schools.webp",
    },

    // لبنان
    {
      name: "مدارس بيروت الحديثة",
      image: "src/assets/schoolimg/Norwich_international_college.webp",
    },
    {
      name: "مدرسة الرواد",
      image: "src/assets/schoolimg/Norwich_international_college.webp",
    },
    {
      name: "مدرسة المستقبل",
      image:
        "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
    },
    {
      name: "مدرسة الأمل",
      image:
        "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
    },
    {
      name: "مدرسة المشرق",
      image: "src/assets/schoolimg/نور_الايمان_العالميه.webp",
    },

    // المغرب
    {
      name: "مدرسة الرباط الدولية",
      image: "src/assets/schoolimg/مدرسه_نوابغ_العلم_العالميه.webp",
    },
    {
      name: "مدرسة المستقبل",
      image:
        "src/assets/schoolimg/Winchester_British_International_School.webp",
    },
    {
      name: "مدرسة النخبة",
      image: "src/assets/schoolimg/مدرسه_العصر_الاهليه.webp",
    },
    {
      name: "مدرسة المغرب الحديثة",
      image:
        "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
    },

    // تونس
    {
      name: "مدارس تونس الدولية",
      image: "src/assets/schoolimg/Norwich_international_college.webp",
    },
    {
      name: "مدرسة المستقبل",
      image: "src/assets/schoolimg/Al-Madina_Language_Schools.webp",
    },
    {
      name: "مدرسة الأمل",
      image: "src/assets/schoolimg/Al-Madina_Language_Schools.webp",
    },
    {
      name: "مدرسة النهضة",
      image: "src/assets/schoolimg/Al-Awael_Private_Schools.webp",
    },
    {
      name: "مدرسة النخبة",
      image: "src/assets/schoolimg/نور_الايمان_العالميه.webp",
    },

    // الجزائر
    {
      name: "مدارس الجزائر الحديثة",
      image:
        "src/assets/schoolimg/Winchester_British_International_School.webp",
    },
    {
      name: "مدرسة المستقschools/ma4.jpgبل",
      image: "src/assets/schoolimg/مدرسه_العصر_الاهليه.webp",
    },
    {
      name: "مدرسة الأمل",
      image:
        "src/assets/schoolimg/Winchester_British_International_School.webp",
    },
    {
      name: "مدرسة النخبة",
      image: "src/assets/schoolimg/مدرسه_نوابغ_العلم_العالميه.webp",
    },
    {
      name: "مدرسة النهضة",
      image: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },

    // العراق
    {
      name: "مدارس بغداد الحديثة",
      image: "src/assets/schoolimg/el-shams-private-school.webp",
    },
    {
      name: "مدرسة المستقبل",
      image: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },
    {
      name: "مدرسة الأمل",
      image: "src/assets/schoolimg/Knights-of-learning-schools.webp",
    },
    {
      name: "مدرسة النخبة",
      image: "src/assets/schoolimg/el-shams-private-school.webp",
    },
    {
      name: "مدرسة النهرين",
      image: "src/assets/schoolimg/مدرسه_العصر_الاهليه.webp",
    },
  ];

  return (
    <div
      className="
    grid
    grid-cols-2
    sm:grid-cols-4
    md:grid-cols-5
    lg:grid-cols-6
    gap-3
    sm:gap-4
    p-4
  "
    >
      {schools.map((school, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Image Wrapper */}
          <div
            className="
            w-[90px] h-[90px]
            sm:w-[110px] sm:h-[110px]
            md:w-[130px] md:h-[130px]
            lg:w-[150px] lg:h-[150px]
            rounded-2xl
            overflow-hidden
            shadow-md
            transition-transform
            duration-300
            md:hover:scale-105
          "
          >
            <img
              src={school.image}
              alt={school.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* School Name */}
          <span className="text-[10px] sm:text-xs text-center mt-2">
            {school.name}
          </span>
          <div className="flex justify-center items-center p-9">
            <Link to={"/contactCar"}>
              <Button
                className="hidden md:inline-flex text-white bg-cyan-700
           hover:bg-cyan-900 px-6 py-3 rounded-2xl text-center"
              >
                لمعرفه المذيد عنا
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
