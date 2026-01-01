// src/pages/ERPPage.tsx
import HeroSection from "./HeroSection";
import { sections } from "../home/components/data";
import { Button } from "@/components/ui/button";
import img from "../assets/img/image.png";

import { Link } from "react-router-dom";

export default function ERPPage() {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-8 space-y-12 flex flex-col  text-right">
      {/* Hero Banner */}

      <div className="text-center space-y-6">
        <Link to="/ConfirmationCardProps">
          <Button
            className="hidden md:inline-flex text-white bg-cyan-700
           hover:bg-cyan-900 px-6 py-3 rounded-2xl"
          >
            احجز ديمو مجاني
          </Button>
        </Link>
        <img
          src={img}
          alt="Hero Image"
          className="w-full max-w-md mx-auto mt-6"
        />
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <HeroSection
          key={section.id}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
}
