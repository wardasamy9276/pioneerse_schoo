interface SchoolCardProps {
  logo: string;
  name: string;
  location: string;
  level: string;
  bgColor: string;
}

const SchoolCard = ({
  logo,
  name,
  location,
  level,
  bgColor,
}: SchoolCardProps) => {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl
         p-4 shadow-lg hover:scale-105
          transition-transform w-full`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Logo / Image */}
      <img
        src={logo}
        alt={name}
        className="w-20 h-20 rounded-full border-2 border-white"
      />

      {/* Info */}
      <div className="flex-1 flex flex-col gap-1">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-700">{location}</p>
        <p className="text-sm text-gray-700">{level}</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-2 flex-wrap">
          <button
            className="bg-white text-gray-800 
          px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            View Profile
          </button>
          <button
            className="bg-white text-gray-800
           px-3 py-1 rounded-lg text-sm font-semibold
            hover:bg-gray-100 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SchoolCardPage() {
  const logo = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  const schools = [
    {
      name: "مدرسة 6 أكتوبر الدولية",
      location: "6 أكتوبر",
      level: "Primary & Secondary",
      color: "#b5b5b5",
    },
    {
      name: "مدرسة أوبتيموم الخاصة",
      location: "6 أكتوبر",
      level: "Primary",
      color: "#afada9",
    },
    {
      name: "مدرسة المستقبل الخاصة",
      location: "6 أكتوبر",
      level: "Secondary",
      color: "#eae9e8",
    },
    {
      name: "مدرسة رواد 6 أكتوبر",
      location: "6 أكتوبر",
      level: "Primary",
      color: "#a8a7a7",
    },
    {
      name: "مدرسة الشمس الخاصة",
      location: "6 أكتوبر",
      level: "Secondary",
      color: "#ebe3e3",
    },
    {
      name: "مدرسة الأمل الخاصة",
      location: "6 أكتوبر",
      level: "Primary & Secondary",
      color: "#ffffffca",
    },
    {
      name: "مدرسة النخبة 6 أكتوبر",
      location: "6 أكتوبر",
      level: "Primary",
      color: "#fff9f0",
    },
    {
      name: "مدرسة النجاح الخاصة",
      location: "6 أكتوبر",
      level: "Secondary",
      color: "#d6d2cc",
    },
    {
      name: "مدرسة القمة",
      location: "6 أكتوبر",
      level: "Primary",
      color: "#dbd8cbac",
    },
    {
      name: "مدرسة الأفق",
      location: "6 أكتوبر",
      level: "Secondary",
      color: "#cec9be",
    },
    {
      name: "مدرسة الامل الجديدة",
      location: "6 أكتوبر",
      level: "Primary",
      color: "#e7e6e4a7",
    },
    {
      name: "مدرسة المستقبل الحديثة",
      location: "6 أكتوبر",
      level: "Secondary",
      color: "#eee2d7",
    },
    {
      name: "مدرسة براعم 6 أكتوبر",
      location: "6 أكتوبر",
      level: "Primary",
      color: "#ece7d0",
    },
    {
      name: "مدرسة التفوق",
      location: "6 أكتوبر",
      level: "Secondary",
      color: "#eae9e6e2",
    },
    {
      name: "مدرسة النيل الجديدة",
      location: "6 أكتوبر",
      level: "Primary & Secondary",
      color: "#fffcf7b0",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100  flex justify-center p-9">
      {/* Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {schools.map((school, index) => (
          <SchoolCard
            key={index}
            logo={logo}
            name={school.name}
            location={school.location}
            level={school.level}
            bgColor={school.color}
          />
        ))}
      </div>
    </div>
  );
}
