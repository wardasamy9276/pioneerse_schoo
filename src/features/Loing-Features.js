import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
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
            }
            else {
                alert("حدث خطأ أثناء إرسال البيانات.");
            }
        }
        catch (error) {
            console.error(error);
            alert("حدث خطأ في الاتصال بالسيرفر.");
        }
    };
    return (_jsx("div", { children: _jsxs("form", { onSubmit: handleSubmit, className: "max-w-xl mx-auto p-6 space-y-4 shadow-lg shadow-cyan-200 rounded-xl", dir: "rtl", children: [fields.map((field) => (_jsxs("div", { children: [_jsx("label", { className: "block mb-1 font-medium", children: field.label }), _jsx("input", { type: field.type, name: field.name, value: formData[field.name], onChange: handleChange, className: "w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-300", required: true })] }, field.name))), _jsxs("div", { children: [_jsx("label", { className: "block mb-1 font-medium", children: "\u0646\u0648\u0639 \u0627\u0644\u0645\u062F\u0631\u0633\u0629" }), _jsxs("select", { name: "schoolType", value: formData.schoolType, onChange: handleChange, className: "w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-300", required: true, children: [_jsx("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), _jsx("option", { value: "\u062E\u0627\u0635\u0629", children: "\u062E\u0627\u0635\u0629" }), _jsx("option", { value: "\u062D\u0643\u0648\u0645\u064A\u0629", children: "\u062D\u0643\u0648\u0645\u064A\u0629" })] })] }), _jsx("button", { type: "submit", className: "w-full bg-[#9E7C2F] text-white py-3 rounded-xl hover:bg-[#7d6224] transition", children: "\u0625\u0631\u0633\u0627\u0644" })] }) }));
}
