import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// import Lang from "../components/Lang";
import imgloogo from "../assets/imgLogo/header-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Navbar() {
    const [open, setOpen] = useState(false);
    const data = [
        { id: 1, label: "الرئيسية", to: "/" },
        { id: 2, label: "من نحن", to: "/about" },
        { id: 3, label: "المميزات", to: "/features" },
        { id: 4, label: "المدونة", to: "/blog" },
        { id: 5, label: "عملاؤنا", to: "/clients" },
        { id: 6, label: "تواصل معنا", to: "/highlights" },
        // { id: 7, label: "لوحة التحكم", to: "/dashboard" },
    ];
    return (_jsx("nav", { className: "bg-cyan-800 text-white shadow-md p-3", children: _jsxs("div", { className: "container mx-auto px-4 md:px-10 py-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: "/Pages", children: _jsx("img", { src: imgloogo, alt: "logo", className: "w-28 md:w-36 object-contain" }) }), _jsx("ul", { className: "hidden md:flex gap-8 font-medium", children: data.map((item) => (_jsx(Link, { to: item.to, className: "relative pb-1\r\n                  after:absolute after:left-0 after:-bottom-0.5\r\n                  after:h-[2px] after:w-0 after:bg-white\r\n                  after:transition-all after:duration-300\r\n                  hover:after:w-full hover:text-cyan-200", children: item.label }, item.id))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Link, { to: "/signin", children: _jsx(Button, { variant: "outline", className: "hidden md:inline-flex text-white \r\n                bg-cyan-600 hover:bg-cyan-900 border-none rounded-2xl", children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }) }), _jsx("button", { onClick: () => setOpen(!open), className: "md:hidden text-2xl", children: "\u2630" })] })] }), _jsx("div", { className: `md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 mt-4" : "max-h-0"}`, children: _jsx("ul", { className: "flex flex-col gap-4 bg-white text-gray-800 p-4 rounded-lg shadow", children: data.map((item) => (_jsx(Link, { to: item.to, onClick: () => setOpen(false), className: "text-center py-2 hover:text-cyan-600", children: item.label }, item.id))) }) })] }) }));
}
export default Navbar;
