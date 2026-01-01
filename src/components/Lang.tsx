// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import arFlag from "../assets/imgLogo/image.png";
// import enFlag from "../assets/img/image1.png";

// function Lang() {
//   const { i18n } = useTranslation();
//   const [open, setOpen] = useState(false);

//   const isArabic = i18n.language === "ar";

//   // تحديث اتجاه الصفحة عند تغير اللغة
//   useEffect(() => {
//     document.documentElement.dir = isArabic ? "rtl" : "ltr";
//   }, [isArabic]);

//   return (
//     <div className="relative flex justify-end items-center">
//       {/* Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2"
//       >
//         <span>{isArabic ? "العربية" : "English"}</span>
//         <img
//           src={isArabic ? arFlag : enFlag}
//           className="w-5 h-3 object-cover"
//         />
//         <span className="text-white">▼</span>
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute right-0 mt-2 bg-white text-black rounded shadow w-32 z-50">
//           <button
//             onClick={() => {
//               i18n.changeLanguage("ar");
//               setOpen(false);
//             }}
//             className="flex items-center gap-2 p-2 w-full hover:bg-gray-100"
//           >
//             <img src={arFlag} className="w-5 h-3" />
//             العربية
//           </button>

//           {/* <button
//             onClick={() => {
//               i18n.changeLanguage("en");
//               setOpen(false);
//             }}
//             className="flex items-center gap-2 p-2 w-full hover:bg-gray-100"
//           >
//             <img src={enFlag} className="w-5 h-3" />
//             English
//           </button> */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Lang;
