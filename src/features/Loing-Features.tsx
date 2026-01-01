import { useState } from "react";

export default function LoingFeatures() {
  const fields = [
    { name: "name", label: "الاسم", type: "text" },
    { name: "phone", label: "رقم الهاتف", type: "tel" },
    { name: "email", label: "البريد الإلكتروني", type: "email" },
    { name: "country", label: "الدولة", type: "text" },

    { name: "schoolName", label: "اسم المدرسة", type: "text" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    governorate: "",
    jobTitle: "",
    schoolName: "",
    schoolType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🟢 أفرغ الفورم فور الضغط على زر الإرسال
    const tempData = { ...formData }; // حفظ البيانات مؤقتاً للإرسال
    setFormData({
      name: "",
      phone: "",
      email: "",
      country: "",
      governorate: "",
      jobTitle: "",
      schoolName: "",
      schoolType: "",
      message: "",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tempData),
      });

      if (res.ok) {
        alert("تم إرسال البيانات بنجاح!");
      } else {
        alert("حدث خطأ أثناء إرسال البيانات.");
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ في الاتصال بالسيرفر.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 space-y-4 shadow-lg shadow-cyan-200 rounded-xl"
        dir="rtl"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block mb-1 font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              required
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium">نوع المدرسة</label>
          <select
            name="schoolType"
            value={formData.schoolType}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            required
          >
            <option value="">اختر</option>
            <option value="خاصة">خاصة</option>
            <option value="حكومية">حكومية</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#9E7C2F] text-white py-3 rounded-xl hover:bg-[#7d6224] transition"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}
