import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function HeroSection({ title, items, }) {
    return (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-2x1 md:text-2xl font-bold text-cyan-700 mb-4", children: title }), _jsx("ul", { className: "list-disc list-inside space-y-1 text-gray-900\r\n       text-base md:text-lg leading-relaxed w-full", children: items.map((item, idx) => (_jsx("a", { className: "text-right", children: item }, idx))) })] }));
}
