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

  return (
    <section className="py-16 px-4">
      {/* النص اللي فوق */}
      <p className="text-center max-w-3xl mx-auto text-lg text-gray-700 mb-10">
        جرب برامج إدارة المدارس الحديثة، نظام تم تصميمه من خلال العمل مع آلاف
        المتخصصين في التعليم والمدرسين والموظفين الإداريين لتقديم أفضل التقنيات.
      </p>

      {/* الكارت */}
      <div className="bg-white max-w-3xl mx-auto rounded-2xl shadow-xl p-8 space-y-8">
        {/* Feature Content */}
        <div className="text-center space-y-4">
          <div className="text-5xl">{icon}</div>

          <h3 className="text-3xl font-bold text-cyan-700">{title}</h3>

          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Video Section */}
        <div className="space-y-6">
          {/* Video */}
          <video src={video} controls className="w-full rounded-xl shadow-md" />

          {/* Upload */}
          <div className="border-2 border-dashed border-cyan-400 rounded-xl p-6 text-center">
            <input
              type="file"
              accept="video/*"
              id="upload-video"
              className="hidden"
              onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
            />

            <label
              htmlFor="upload-video"
              className="cursor-pointer inline-block bg-cyan-600
              text-white px-8 py-3 rounded-xl hover:bg-cyan-700 transition"
            >
              ⬆️ رفع فيديو جديد
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
