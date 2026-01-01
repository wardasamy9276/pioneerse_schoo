import SchoolWhyUs from "../home/SchoolWhyUs";

import SectionList from "../home/SectionList";

import { useState } from "react";

export default function ContactPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">مرحبا بك في موقعنا</h1>

      <button
        onClick={() => setShowContact(!showContact)}
        className="bg-cyan-600 text-white px-6 py-3 rounded-2xl hover:bg-cyan-800 transition mb-4"
      >
        اتواصل معنا
      </button>

      {/* القسم المتوسع يظهر أسفل الزرار */}
      {showContact && (
        <div
          className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md 
        transition-all duration-300  flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-12  p-4">تواصل معنا</h2>
          <p>📧 البريد الإلكتروني:wardasamy1996@gmail.com</p>
          <p>📞 الهاتف:01040381999</p>
          <p>🌐 الموقع: www.example.com</p>
          <button
            onClick={() => setShowContact(false)}
            className="mt-4 bg-cyan-700 text-white px-4 py-2 rounded-xl hover:bg-red-800"
          >
            إغلاق
          </button>
        </div>
      )}
      <SchoolWhyUs />

      <SectionList />
    </div>
  );
}
