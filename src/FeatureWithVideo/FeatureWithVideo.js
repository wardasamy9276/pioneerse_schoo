import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from "react";
// export default function FeatureWithVideo({ icon, title, description }) {
//   const [video, setVideo] = useState(null);
//   return (
//     <div>
//       <p>
//         جرب برامج إدارة المدارس الحديثة، نظام تم تصميمه من خلال العمل مع آلاف
//         المتخصصين في التعليم والمدرسين والموظفين الإداريين لتقديم افضل التقنيات
//       </p>
//       <div className="bg-white rounded-2xl w-[700px] h-[500px] m-auto shadow-lg p-6 space-y-6">
//         {/* ===== Feature Content ===== */}
//         <div className="text-center space-y-3">
//           <div className="text-5xl">{icon}</div>
//           <h3 className="text-2xl font-bold text-cyan-700">{title}</h3>
//           <p className="text-gray-600 leading-relaxed">{description}</p>
//         </div>
//         {/* ===== Upload Video ===== */}
//         <div className="border-2 border-dashed border-cyan-400 rounded-xl p-6 text-center">
//           <input
//             type="file"
//             accept="video/*"
//             onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
//             className="hidden"
//             id="upload-video"
//           />
//           <label
//             htmlFor="upload-video"
//             className="cursor-pointer inline-block bg-cyan-600
//            text-white  p-10 rounded-xl hover:bg-cyan-700 transition"
//           >
//             ⬆️ رفع فيديو
//           </label>
//           {video && (
//             <video src={video} controls className="mt-6 w-full rounded-xl" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
export default function FeatureWithVideo({ icon, title, description }) {
    // فيديو افتراضي
    const defaultVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
    const [video, setVideo] = useState(defaultVideo);
    return (_jsxs("section", { className: "py-16 px-4", children: [_jsx("p", { className: "text-center max-w-3xl mx-auto text-lg text-gray-700 mb-10", children: "\u062C\u0631\u0628 \u0628\u0631\u0627\u0645\u062C \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062F\u0627\u0631\u0633 \u0627\u0644\u062D\u062F\u064A\u062B\u0629\u060C \u0646\u0638\u0627\u0645 \u062A\u0645 \u062A\u0635\u0645\u064A\u0645\u0647 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u0622\u0644\u0627\u0641 \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u064A\u0646 \u0641\u064A \u0627\u0644\u062A\u0639\u0644\u064A\u0645 \u0648\u0627\u0644\u0645\u062F\u0631\u0633\u064A\u0646 \u0648\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u064A\u064A\u0646 \u0644\u062A\u0642\u062F\u064A\u0645 \u0623\u0641\u0636\u0644 \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A." }), _jsxs("div", { className: "bg-white max-w-3xl mx-auto rounded-2xl shadow-xl p-8 space-y-8", children: [_jsxs("div", { className: "text-center space-y-4", children: [_jsx("div", { className: "text-5xl", children: icon }), _jsx("h3", { className: "text-3xl font-bold text-cyan-700", children: title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: description })] }), _jsxs("div", { className: "space-y-6", children: [_jsx("video", { src: video, controls: true, className: "w-full rounded-xl shadow-md" }), _jsxs("div", { className: "border-2 border-dashed border-cyan-400 rounded-xl p-6 text-center", children: [_jsx("input", { type: "file", accept: "video/*", id: "upload-video", className: "hidden", onChange: (e) => setVideo(URL.createObjectURL(e.target.files[0])) }), _jsx("label", { htmlFor: "upload-video", className: "cursor-pointer inline-block bg-cyan-600\r\n              text-white px-8 py-3 rounded-xl hover:bg-cyan-700 transition", children: "\u2B06\uFE0F \u0631\u0641\u0639 \u0641\u064A\u062F\u064A\u0648 \u062C\u062F\u064A\u062F" })] })] })] })] }));
}
