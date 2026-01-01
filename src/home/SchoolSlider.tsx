import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SchoolsSlider = () => {
  const schools = [
    {
      id: 1,
      name: "مدارس الشمس الحديثة",
      logo: "src/assets/schoolimg/مدرسه_فيوتشر_الدوليه.webp",
    },
    {
      id: 2,
      name: "مدرسة راهبات سيدة المعونة",
      logo: "src/assets/schoolimg/مدرسه_فيوتشر_الدوليه.webp",
    },
    {
      id: 3,
      name: "مدرسة وينشستر البريطانية",
      logo: "src/assets/schoolimg/مدرسه_فيوتشر_الدوليه.webp",
    },
    {
      id: 4,
      name: "مدارس العروبة للغات",
      logo: "src/assets/schoolimg/مدرسه_فيوتشر_الدوليه.webp",
    },
    {
      id: 5,
      name: "مدرسة التجربة الحديثة",
      logo: "src/assets/schoolimg/مدرسه_فيوتشر_الدوليه.webp",
    },
    {
      id: 7,
      name: "  مدرهه العلا التجريبه للغات",
      logo: "src/assets/schoolimg/مدرسه_فيوتشر_الدوليه.webp",
    },
  ];

  return (
    <div className="p-15">
      <a href="/card">
        <h1 className="text-center p-6 font-bold text-[30px] text-[#9E7C2F]">
          عملاؤنا
        </h1>
      </a>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20} // المسافة بين الكروت
        slidesPerView={1} // عدد الكروت اللي تظهر (للموبايل)
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },

          1024: { slidesPerView: 4 },
        }}
        className="max-w-6xl mx-auto px-4 bg-white"
      >
        {schools.map((school) => (
          <SwiperSlide key={school.id}>
            <div className="flex flex-col items-center">
              <div
                className="w-50 h-35 border border-gray-200 rounded-xl 
              shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={school.logo}
                  alt={school.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {/* اسم المدرسة */}
              <p className="mt-4 text-center text-gray-900 font-bold text-sm leading-relaxed max-w-[150px]">
                {school.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center  items-center p-9">
        <Link to={"/faqpages"}>
          <Button
            className="hidden md:inline-flex text-white bg-cyan-700
       hover:bg-cyan-900 px-6 py-3 rounded-2xl text-center"
          >
            كل ما يخص الطلبه
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SchoolsSlider;
