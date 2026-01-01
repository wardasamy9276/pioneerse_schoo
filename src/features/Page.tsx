import Features from "../features/Features";

import AboutSystem from "@/About/AboutSystem";
import SchoolTimeline from "../home/SchoolTimeline";
import SchoolSplitSection from "../home/SchoolSplitSection";
import SchoolSlider from "../home/SchoolSlider";
import SchoolWhyUs from "../home/SchoolWhyUs";
export default function Page() {
  return (
    <div>
      <SchoolTimeline />
      <SchoolSplitSection />
      <SchoolWhyUs />
      <AboutSystem />
      <SchoolSlider />
      <Features />
    </div>
  );
}
