import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// استيراد الصور لكل المدارس
import AlMadina from "@/assets/schoolimg/Al-Madina_Language_Schools.webp";
import CapitalGate from "@/assets/schoolimg/capital_gate_semi_international_school.webp";
import ElShams from "@/assets/schoolimg/el-shams-private-school.webp";
import Knights from "@/assets/schoolimg/Knights-of-learning-schools.webp";
import MiddleEast from "@/assets/schoolimg/middle_east_international_schools.webp";
import NewCapital from "@/assets/schoolimg/new_capital_school.webp";
import Norwich from "@/assets/schoolimg/Norwich_international_college.webp";
import Orouba from "@/assets/schoolimg/Orouba_Language_School_Maadi.webp";
import OurLadyHeliopolis from "@/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_Heliopolis.webp";
import OurLadyNewHeliopolis from "@/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp";
import SevenPillars from "@/assets/schoolimg/seven-Pillars-International-School.webp";
import AlAwael from "@/assets/schoolimg/Al-Awael_Private_Schools.webp";
import NoorAlEman from "@/assets/schoolimg/نور_الايمان_العالميه.webp";
import SmartSchool from "@/assets/schoolimg/مدرسه_سمارت_للغات.webp";
import AlAsr from "@/assets/schoolimg/مدرسه_العصر_الاهليه.webp";
import WinChester from "@/assets/schoolimg/Winchester_British_International_School.webp";

export default function SmallSchoolSlider() {
  const schools = [
    // مصر
    { name: "مدرسة النيل الدولية", image: AlMadina },
    { name: "مدرسة القاهرة الحديثة", image: AlMadina },
    { name: "مدرسة الرواد", image: CapitalGate },
    { name: "مدرسة المستقبل", image: ElShams },
    { name: "مدرسة الأمل", image: Knights },

    { name: "مدارس الظهران الأهلية", image: MiddleEast },
    { name: "مدارس الرياض الأهلية", image: MiddleEast },
    { name: "مدارس المستقبل الدولية", image: NewCapital },
    { name: "مدارس الأهلي", image: NewCapital },
    { name: "مدارس السلام", image: Norwich },

    { name: "مدرسة جيمس الدولية", image: Orouba },
    { name: "مدرسة الإمارات الوطنية", image: OurLadyHeliopolis },
    { name: "مدرسة دبي الدولية", image: OurLadyNewHeliopolis },
    { name: "مدرسة أبوظبي الحديثة", image: SevenPillars },
    { name: "مدرسة الخليج الدولية", image: SevenPillars },

    { name: "مدارس الكويت الوطنية", image: AlAsr },
    { name: "مدرسة الجزيرة", image: NoorAlEman },
    { name: "مدرسة الإبداع", image: NoorAlEman },
    { name: "مدرسة الرواد", image: SmartSchool },
    { name: "مدرسة الحكمة", image: SevenPillars },

    // قطر
    { name: "مدارس الدوحة الحديثة", image: Orouba },
    { name: "مدرسة الراشد", image: Orouba },
    { name: "مدرسة النور الدولية", image: NewCapital },
    { name: "مدارس المستقبل", image: NewCapital },
    { name: "مدارس الشمال", image: MiddleEast },

    // الأردن
    { name: "مدارس عمان الأهلية", image: AlAwael },
    { name: "مدرسة الرواد الدولية", image: AlMadina },
    { name: "مدرسة الملكة رانيا", image: CapitalGate },
    { name: "مدرسة المستقبل", image: Knights },
    { name: "مدرسة الأمل", image: MiddleEast },

    // لبنان
    { name: "مدارس بيروت الحديثة", image: Norwich },
    { name: "مدرسة الرواد", image: Norwich },
    { name: "مدرسة المستقبل", image: OurLadyNewHeliopolis },
    { name: "مدرسة الأمل", image: OurLadyNewHeliopolis },
    { name: "مدرسة المشرق", image: NoorAlEman },

    // المغرب
    { name: "مدرسة الرباط الدولية", image: WinChester },
    { name: "مدرسة المستقبل", image: WinChester },
    { name: "مدرسة النخبة", image: AlAsr },
    { name: "مدرسة المغرب الحديثة", image: OurLadyNewHeliopolis },

    // تونس
    { name: "مدارس تونس الدولية", image: Norwich },
    { name: "مدرسة المستقبل", image: AlMadina },
    { name: "مدرسة الأمل", image: AlMadina },
    { name: "مدرسة النهضة", image: AlAwael },
    { name: "مدرسة النخبة", image: NoorAlEman },

    // الجزائر
    { name: "مدارس الجزائر الحديثة", image: WinChester },
    { name: "مدرسة المستقبل", image: AlAsr },
    { name: "مدرسة الأمل", image: WinChester },
    { name: "مدرسة النخبة", image: WinChester },
    { name: "مدرسة النهضة", image: SevenPillars },

    // العراق
    { name: "مدارس بغداد الحديثة", image: ElShams },
    { name: "مدرسة المستقبل", image: SevenPillars },
    { name: "مدرسة الأمل", image: Knights },
    { name: "مدرسة النخبة", image: ElShams },
    { name: "مدرسة النهرين", image: AlAsr },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 p-4">
      {schools.map((school, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 md:hover:scale-105">
            <img
              src={school.image}
              alt={school.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] sm:text-xs text-center mt-2">
            {school.name}
          </span>
          <div className="flex justify-center items-center p-4">
            <Link to="/contactCar">
              <Button className="hidden md:inline-flex text-white bg-cyan-700 hover:bg-cyan-900 px-6 py-3 rounded-2xl text-center">
                لمعرفه المذيد عنا
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
