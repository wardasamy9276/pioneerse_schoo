import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            image: "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_Heliopolis.webp",
        },
        {
            name: "مدرسة دبي الدولية",
            image: "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
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
            image: "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
        },
        {
            name: "مدرسة الأمل",
            image: "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
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
            image: "src/assets/schoolimg/Winchester_British_International_School.webp",
        },
        {
            name: "مدرسة النخبة",
            image: "src/assets/schoolimg/مدرسه_العصر_الاهليه.webp",
        },
        {
            name: "مدرسة المغرب الحديثة",
            image: "src/assets/schoolimg/Our_Lady_Of_Perpetual_Succour_School_New_Heliopolis.webp",
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
            image: "src/assets/schoolimg/Winchester_British_International_School.webp",
        },
        {
            name: "مدرسة المستقschools/ma4.jpgبل",
            image: "src/assets/schoolimg/مدرسه_العصر_الاهليه.webp",
        },
        {
            name: "مدرسة الأمل",
            image: "src/assets/schoolimg/Winchester_British_International_School.webp",
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
    return (_jsx("div", { className: "\r\n    grid\r\n    grid-cols-2\r\n    sm:grid-cols-4\r\n    md:grid-cols-5\r\n    lg:grid-cols-6\r\n    gap-3\r\n    sm:gap-4\r\n    p-4\r\n  ", children: schools.map((school, index) => (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "\r\n            w-[90px] h-[90px]\r\n            sm:w-[110px] sm:h-[110px]\r\n            md:w-[130px] md:h-[130px]\r\n            lg:w-[150px] lg:h-[150px]\r\n            rounded-2xl\r\n            overflow-hidden\r\n            shadow-md\r\n            transition-transform\r\n            duration-300\r\n            md:hover:scale-105\r\n          ", children: _jsx("img", { src: school.image, alt: school.name, loading: "lazy", className: "w-full h-full object-cover" }) }), _jsx("span", { className: "text-[10px] sm:text-xs text-center mt-2", children: school.name }), _jsx("div", { className: "flex justify-center items-center p-9", children: _jsx(Link, { to: "/contactCar", children: _jsx(Button, { className: "hidden md:inline-flex text-white bg-cyan-700\r\n           hover:bg-cyan-900 px-6 py-3 rounded-2xl text-center", children: "\u0644\u0645\u0639\u0631\u0641\u0647 \u0627\u0644\u0645\u0630\u064A\u062F \u0639\u0646\u0627" }) }) })] }, index))) }));
}
