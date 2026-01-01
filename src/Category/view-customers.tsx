import React, { useState } from "react";

export default function DemoButton() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="flex items-center justify-between p-6 gap-9 text-center">
      {/* الزر */}
      <button
        onClick={handleClick}
        className="bg-cyan-700 hover:bg-[#164e63]
         text-white px-6 py-3 rounded-2xl 
         transition-transform transform 
         hover:scale-105 "
      >
        احجز عرض تجريبي سريع
      </button>

      {/* رسالة تظهر على نفس الصف */}
      {showMessage && (
        <div className="bg-white border border-cyan-700 text-cyan-900 px-4 py-2 rounded-lg shadow-md animate-fadeIn">
          شكراً! سيتم التواصل معك قريباً لعرض تجريبي.
        </div>
      )}

      {/* المودال */}
    </div>
  );
}
