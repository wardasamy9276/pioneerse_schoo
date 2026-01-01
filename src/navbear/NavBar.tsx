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

  return (
    <nav className="bg-cyan-800 text-white shadow-md p-3">
      <div className="container mx-auto px-4 md:px-10 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/Pages">
            <img
              src={imgloogo}
              alt="logo"
              className="w-28 md:w-36 object-contain"
            />
          </Link>

          <ul className="hidden md:flex gap-8 font-medium">
            {data.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                className="relative pb-1
                  after:absolute after:left-0 after:-bottom-0.5
                  after:h-[2px] after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/signin">
              <Button
                variant="outline"
                className="hidden md:inline-flex text-white 
                bg-cyan-600 hover:bg-cyan-900 border-none rounded-2xl"
              >
                تسجيل الدخول
              </Button>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 bg-white text-gray-800 p-4 rounded-lg shadow">
            {data.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                onClick={() => setOpen(false)}
                className="text-center py-2 hover:text-cyan-600"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
