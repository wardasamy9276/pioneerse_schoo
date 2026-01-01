import React, { useState } from "react";
import DemoModal from "./DemoModal";

interface DemoBookingCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const DemoBookingCard = ({
  title = "احجز عرض تجريبي سريع",
  description = "جرب خدمتنا بنفسك بدون أي التزام، وسيتم التواصل معك لتحديد موعد العرض التجريبي.",
  buttonText = "احجز الآن",
}: DemoBookingCardProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // تختفي بعد 3 ثواني
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto p-16 bg-white
     rounded-3xl shadow-xl flex flex-col md:flex-row 
     gap-6"
    >
      {/* نصوص */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-cyan-700 mb-2">{title}</h2>
        <p className="text-cyan-900 text-lg">{description}</p>
      </div>

      {/* زر + رسالة */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleClick}
          className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-transform transform hover:scale-105"
        >
          {buttonText}
        </button>

        {/* رسالة تظهر */}
        {showMessage && (
          <div className="bg-cyan-50 border border-cyan-700 text-cyan-900 px-4 py-2 rounded-xl shadow-md animate-fadeIn">
            شكراً! سيتم التواصل معك قريباً لعرض تجريبي.
          </div>
        )}
      </div>

      {/* مودال */}
      {showModal && <DemoModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DemoBookingCard;
