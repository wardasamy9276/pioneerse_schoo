import Hero from "./Hero";
import ERPPage from "../home/Erppage";
import SectionList from "./SectionList";
import SchoolSlider from "./SchoolSlider";
import SchoolCard from "./SchoolCard";
import Login from "./Login";
import FAQComponent from "../Highlights/FAQComponent";
import SchoolStats from "../Highlights/SchoolStats";
import SchoolPrograms from "./SchoolPrograms";
import SchoolWhyUs from "./SchoolWhyUs";
import SchoolSplitSection from "./SchoolSplitSection";
import LoginInfoSection from "./LoginInfoSection";
import SchoolTimeline from "./SchoolTimeline";
import ConfirmationCard from "./ConfirmationCardProps";
import SchoolsPage from "./SchoolsPage";

function Home() {
  return (
    <div>
      <Hero />
      <ERPPage />
      <SchoolWhyUs />
      <SchoolSlider />
      <SectionList />
      <SchoolStats />
      <FAQComponent />
      <SchoolCard />
      <SchoolTimeline />
      <SchoolSplitSection />
      <SchoolsPage />
      <LoginInfoSection />
      <div>
        <ConfirmationCard />
        <SchoolPrograms />
      </div>
      <Login />
    </div>
  );
}

export default Home;
