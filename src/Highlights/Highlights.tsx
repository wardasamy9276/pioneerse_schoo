import SchoolsSlider from "@/home/SchoolSlider";
import SMSCards from "./SsmCards";
import LoingFeatures from "../features/Loing-Features";
import FAQComponent from "../Highlights/FAQComponent";
import SchoolStats from "../Highlights/SchoolStats";
function Highlights() {
  return (
    <div>
      <SchoolsSlider />
      <SMSCards />
      <FAQComponent />
      <LoingFeatures />
      <SchoolStats />
    </div>
  );
}

export default Highlights;
