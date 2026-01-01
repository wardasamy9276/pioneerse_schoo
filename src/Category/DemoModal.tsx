import React, { useState } from "react";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
    setName("");
    setPhone("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(closeModal, 3000); // يغلق تلقائيًا بعد 3 ثواني
  };

  return (
    <div
      className=" 
   "
    >
      {/* زر فتح Modal */}
      <button
        onClick={openModal}
        className="bg-cyan-700 hover:bg-[#164e63] text-white px-6 py-3 rounded-3xl shadow-lg transform hover:scale-105 transition-all"
      >
        احجز عرض تجريبي مبهر
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white rounded-3xl p-8 w-11/12 sm:w-96 shadow-2xl relative animate-fadeIn">
            {/* زر اغلاق */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  احجز العرض التجريبي
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="اسمك"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    type="submit"
                    className="bg-cyan-700 hover:bg-[#164e63] text-white px-6 py-3 rounded-2xl shadow-md transition-transform transform hover:scale-105"
                  >
                    ارسال
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center text-green-600 font-semibold text-lg">
                تم ارسال طلبك! <br /> سنتواصل معك قريبًا.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
