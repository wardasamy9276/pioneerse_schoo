import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp, FaYoutube, } from "react-icons/fa";
export default function iconsList() {
    return (_jsx("div", { children: _jsxs("div", { className: "\r\n        w-full flex justify-center items-center\r\n        gap-5 pt-6 ", children: [_jsx("a", { href: "#", className: "text-blue-600 hover:scale-110 transition", children: _jsx(FaFacebookF, { size: 35 }) }), _jsx("a", { href: "#", className: "text-sky-500 hover:scale-110 transition", children: _jsx(FaTelegramPlane, { size: 35 }) }), _jsx("a", { href: "#", className: "text-green-500 hover:scale-110 transition", children: _jsx(FaWhatsapp, { size: 35 }) }), _jsx("a", { href: "#", className: "text-red-600 hover:scale-110 transition", children: _jsx(FaYoutube, { size: 35 }) })] }) }));
}
