import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// 📝 الداتا
const smsData = [
    {
        id: 1,
        title: "نظام إدارة المدرسة SMS",
        description: "Pioneers E-School SMS نظام إداري متكامل يحتوي على كافة الأدوات اللازمة لإدارة المدارس الخاصة، الطلاب...",
        img: "src/assets/schoolimg/Knights-of-learning-schools.webp",
    },
    {
        id: 2,
        title: "إدارة حضور الطلاب",
        description: "تابع حضور الطلاب بشكل إلكتروني دون الحاجة للأوراق التقليدية، وسجّل كل البيانات بدقة.",
        img: "src/assets/schoolimg/نور_الايمان_العالميه.webp",
    },
    {
        id: 3,
        title: "نظام الرسائل النصية",
        description: "أرسل رسائل SMS لأولياء الأمور بسرعة وفعالية لتنبيههم بكل جديد في المدرسة.",
        img: "src/assets/schoolimg/مدرسه_نوابغ_العلم_العالميه.webp",
    },
    {
        id: 4,
        title: "إدارة المخزون المدرسي",
        description: "تابع كل المخازن والأصناف إلكترونيًا لتسهيل العمليات اليومية والإدارية.",
        img: "src/assets/schoolimg/مدرسه_سمارت_للغات.webp",
    },
    {
        id: 5,
        title: "التحصيل المالي للمدرسة",
        description: "راقب الرسوم الدراسية والفواتير إلكترونيًا وقلّل من الأخطاء اليدوية.",
        img: "src/assets/schoolimg/Winchester_British_International_School.webp",
    },
    {
        id: 6,
        title: "نظام إدارة المكتبة",
        description: "أتمتة عمليات المكتبة بالكامل: متابعة الكتب، الإعارة، والعائدات.",
        img: "src/assets/schoolimg/Orouba_Language_School_Maadi.webp",
    },
    {
        id: 7,
        title: "بوابة الطلاب",
        description: "تمكّن الطلاب من متابعة جداولهم ودرجاتهم بكل سهولة من أي مكان.",
        img: "src/assets/schoolimg/Repton_Cairo_School.webp",
    },
    {
        id: 8,
        title: "تقارير أداء المدرسة",
        description: "احصل على تقارير دقيقة لجميع بيانات المدرسة لتحسين الأداء الإداري.",
        img: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },
    {
        id: 9,
        title: "إدارة الحافلات المدرسية",
        description: "نظم مسارات الحافلات ومتابعة الطلاب لضمان النقل الآمن.",
        img: "src/assets/schoolimg/seven-Pillars-International-School.webp",
    },
    {
        id: 10,
        title: "إدارة العيادة المدرسية",
        description: "تابع جميع الحالات الطبية واللقاحات داخل المدرسة بسهولة.",
        img: "src/assets/schoolimg/Misr_American_College_MAC.webp",
    },
    {
        id: 11,
        title: "إدارة الكنترول المدرسي",
        description: "نظم الامتحانات والدرجات إلكترونيًا لتوفير الوقت وتقليل الأخطاء.",
        img: "src/assets/schoolimg/Knights-of-learning-schools.webp",
    },
    {
        id: 12,
        title: "نظام إدارة الموارد البشرية HRMS",
        description: "إدارة بيانات الموظفين وسياسات المدرسة بسهولة وكفاءة.",
        img: "src/assets/schoolimg/Knights-of-learning-schools.webp",
    },
    {
        id: 13,
        title: "نظام إدارة التعلم LMS",
        description: "نظام متكامل لإدارة المحتوى التعليمي والاختبارات عبر الإنترنت.",
        img: "src/assets/schoolimg/Misr_American_College_MAC.webp",
    },
    {
        id: 14,
        title: "إدارة البيانات المالية",
        description: "تحكم كامل في حسابات المدرسة والفواتير والرسوم الدراسية.",
        img: "src/assets/schoolimg/el-shams-private-school.webp",
    },
    {
        id: 15,
        title: "تطبيق المدرسة الذكي",
        description: "تطبيق إلكتروني يربط الطلاب والمعلمين وأولياء الأمور في منصة واحدة.",
        img: "src/assets/schoolimg/مدرسه_سمارت_للغات.webp",
    },
];
export default function SMSCards() {
    return (_jsxs("div", { className: "p-6 md:p-12 bg-gray-50", dir: "rtl", children: [_jsx("h1", { className: "text-3xl font-bold mb-8 text-center text-[#9E7C2F]", children: "\u0645\u0645\u064A\u0632\u0627\u062A \u0646\u0638\u0627\u0645 SMS" }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: smsData.map((item) => (_jsxs("div", { className: "bg-white p-4 rounded-xl shadow hover:shadow-lg transition", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("img", { src: item.img, alt: item.title, className: "w-40 h-32 object-contain" }) }), _jsx("h3", { className: "text-lg font-bold mb-2 text-center", children: item.title }), _jsx("p", { className: "text-gray-700 text-sm text-center", children: item.description }), _jsx("div", { className: "mt-4 flex justify-center", children: _jsx("button", { className: "px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-900 transition", children: "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F" }) })] }, item.id))) })] }));
}
