import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FAQPage() {
    const faqs = [
        {
            question: "ما هو نظام Pioneers E-School SMS؟",
            answer: "نظام متكامل لإدارة المدارس يشمل حضور وغياب، جداول دراسية، تقارير أداء، ورسائل.",
        },
        {
            question: "هل يمكن استخدام النظام على الهاتف؟",
            answer: "نعم، يمكن استخدام النظام على الهاتف من خلال المتصفح أو تطبيق مخصص.",
        },
        {
            question: "هل البيانات آمنة داخل النظام؟",
            answer: "نعم، البيانات مؤمنة باستخدام بروتوكولات حماية متقدمة لضمان السرية.",
        },
        {
            question: "هل يمكن متابعة الحضور والغياب للطلاب؟",
            answer: "نعم، يوفر النظام أدوات متابعة حضور الطلاب وإصدار تقارير يومية أو دورية.",
        },
        {
            question: "هل يمكن إرسال الرسائل النصية من النظام؟",
            answer: "نعم، يمكن إرسال الرسائل النصية مباشرة للطلاب أو أولياء الأمور.",
        },
        {
            question: "هل يدعم النظام إدارة الجداول الدراسية؟",
            answer: "نعم، يدعم إنشاء وإدارة الجداول وتوزيع الحصص تلقائيًا.",
        },
        {
            question: "هل يوفر النظام تقارير أداء للطلاب؟",
            answer: "نعم، يوفر تقارير مفصلة يمكن طباعتها أو تصديرها.",
        },
        {
            question: "هل يمكن دمج النظام مع برامج المحاسبة؟",
            answer: "نعم، بعض الإصدارات تدعم التكامل مع برامج المحاسبة.",
        },
        {
            question: "هل يمكن إضافة مستخدمين جدد بسهولة؟",
            answer: "نعم، يمكن إضافة مستخدمين وتخصيص صلاحياتهم بسهولة.",
        },
    ];
    return (_jsx("div", { className: "min-h-screen bg-gray-100 p-6 flex justify-end ", children: _jsx("div", { className: "max-w-4xl w-full space-y-6 text-right m-7", children: faqs.map((faq, idx) => (_jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "text-lg sm:text-xl font-bold text-gray-900", children: faq.question }), _jsx("p", { className: "text-gray-700 text-sm sm:text-base", children: faq.answer }), _jsx("hr", { className: "border-gray-300 mt-2" })] }, idx))) }) }));
}
