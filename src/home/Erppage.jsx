import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/ERPPage.tsx
import HeroSection from "./HeroSection";
import { sections } from "./components/data";
import { Button } from "@/components/ui/button";
import img from "../assets/img/image.png";
import { Link } from "react-router-dom";
export default function ERPPage() {
    return (_jsxs("div", { className: "px-4 md:px-12 lg:px-20 py-8 space-y-12 flex flex-col  text-right", children: [_jsxs("div", { className: "text-center space-y-6", children: [_jsx(Link, { to: "/ConfirmationCardProps", children: _jsx(Button, { className: "hidden md:inline-flex text-white bg-cyan-700\r\n           hover:bg-cyan-900 px-6 py-3 rounded-2xl", children: "\u0627\u062D\u062C\u0632 \u062F\u064A\u0645\u0648 \u0645\u062C\u0627\u0646\u064A" }) }), _jsx("img", { src: img, alt: "Hero Image", className: "w-full max-w-md mx-auto mt-6" })] }), sections.map((section) => (_jsx(HeroSection, { title: section.title, items: section.items }, section.id)))] }));
}
