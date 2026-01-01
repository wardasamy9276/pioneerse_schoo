import Viewcustomers from "../Category/view-customers";
// import DemoModal from "../Category/DemoModal";
import DemoBookingCardProps from "../Category/DemoBookingCard";
import SchoolCard from "../home/SchoolCard";

export default function customers() {
  return (
    <div className="">
      <Viewcustomers />
      <SchoolCard />

      <DemoBookingCardProps />
      {/* <DemoModal /> */}
    </div>
  );
}
