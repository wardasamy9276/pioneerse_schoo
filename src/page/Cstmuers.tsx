import SchoolCard from "../home/SchoolCard";
function Cstmuers() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-center">
        نظام إدارة مدرسه متكامل
      </h2>
      <p className="text-cyan-900-300 leading-relaxed text-center">
        نوفر لك منصة ذكية تساعدك على إدارة المدرسة بسهولة وكفاءة مع تحسين
        التواصل بين الإدارة والمعلمين وأولياء الأمور.
      </p>
      <SchoolCard />
    </div>
  );
}

export default Cstmuers;
