export default function HeroSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2x1 md:text-2xl font-bold text-cyan-700 mb-4">
        {title}
      </h2>
      <ul
        className="list-disc list-inside space-y-1 text-gray-900
       text-base md:text-lg leading-relaxed w-full"
      >
        {items.map((item, idx) => (
          <a key={idx} className="text-right">
            {item}
          </a>
        ))}
      </ul>
    </div>
  );
}
