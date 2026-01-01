import SchoolCard from "../home/SchoolCard";
import SchoolWhyUs from "../home/SchoolWhyUs";
import SchoolSplitSection from "../home/SchoolSplitSection";
function About() {
  return (
    <div className="flex flex-col items-center p-6 md:p-10 gap-6 md:gap-9 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-[#9E7C2F] font-bold text-[30px]">
        بعض عملائنا
      </h1>

      <p className="text-gray-700 text-sm md:text-lg max-w-2xl text-cyan-900">
        نعتز ونتشرف بانضمام أكثر من 500 مدرسة إلى سابقة أعمالنا في مصر وجميع
        الوطن العربي
      </p>

      {/* Card Slider  للمدارس */}
      <div className="w-full">
        <SchoolCard />
      </div>
      <p className="text-cyan-800 font-bold text-[33px]">
        تتطبق الشروط والاحكام
      </p>
      <SchoolWhyUs />
      <SchoolSplitSection />
    </div>
  );
}

export default About;
