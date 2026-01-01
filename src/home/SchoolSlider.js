import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "p-15", children: [_jsx("a", { href: "/card", children: _jsx("h1", { className: "text-center p-6 font-bold text-[30px] text-[#9E7C2F]", children: "\u0639\u0645\u0644\u0627\u0624\u0646\u0627" }) }), _jsx(Swiper, { modules: [Autoplay, Pagination], spaceBetween: 20, slidesPerView: 1, autoplay: { delay: 2500, disableOnInteraction: false }, pagination: { clickable: true }, breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }, className: "max-w-6xl mx-auto px-4 bg-white", children: schools.map((school) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "w-50 h-35 border border-gray-200 rounded-xl \r\n              shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow", children: _jsx("img", { src: school.logo, alt: school.name, className: "max-w-full max-h-full object-contain" }) }), _jsx("p", { className: "mt-4 text-center text-gray-900 font-bold text-sm leading-relaxed max-w-[150px]", children: school.name })] }) }, school.id))) }), _jsx("div", { className: "flex justify-center  items-center p-9", children: _jsx(Link, { to: "/faqpages", children: _jsx(Button, { className: "hidden md:inline-flex text-white bg-cyan-700\r\n       hover:bg-cyan-900 px-6 py-3 rounded-2xl text-center", children: "\u0643\u0644 \u0645\u0627 \u064A\u062E\u0635 \u0627\u0644\u0637\u0644\u0628\u0647" }) }) })] }));
};
export default SchoolsSlider;
