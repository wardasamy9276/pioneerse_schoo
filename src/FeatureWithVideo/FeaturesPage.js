import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FeaturesPage() {
    const features = [
        {
            id: 1,
            icon: "🏫",
            title: "نظام إدارة المدرسة المثالي لتلبية احتياجات مؤسستك",
            description: "نحن نقدم كل ما تحتاجه لإدارة مؤسسة تعليمية، لتقديم نتائج مضمونة وأفضل، ومساعدتك في الانتقال إلى نظام رقمي بالكامل.",
        },
        {
            id: 2,
            icon: "🚀",
            title: "ميزات قوية لمؤسستك",
            description: "نوفر أدوات متكاملة لإدارة الطلاب، المعلمين، الفصول، والعمليات اليومية بكفاءة عالية.",
        },
        {
            id: 3,
            icon: "💬",
            title: "منصة تواصل قوية",
            description: "حافظ على التواصل المستمر مع أولياء الأمور وزيادة مشاركة الطلاب مع المعلمين من خلال نظام تواصل ذكي وفعال.",
        },
    ];
    return (_jsxs("section", { className: "py-20 px-4 bg-gray-50", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-cyan-800 mb-4", children: "\u0645\u064A\u0632\u0627\u062A \u0642\u0648\u064A\u0629 \u0644\u0645\u0624\u0633\u0633\u062A\u0643" }), _jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto", children: "\u0646\u0638\u0627\u0645 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0639\u0644\u0649 \u0627\u0644\u062A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064A \u0627\u0644\u0643\u0627\u0645\u0644." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: features.map((item) => (_jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-8 text-center space-y-4 hover:shadow-xl transition", children: [_jsx("div", { className: "text-6xl", children: item.icon }), _jsx("h3", { className: "text-2xl font-bold text-cyan-700", children: item.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: item.description })] }, item.id))) })] }));
}
