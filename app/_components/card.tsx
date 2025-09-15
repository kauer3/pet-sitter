export default function Card({
  title,
  description,
  icon
}: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }) {
  return (
    <div className="p-5 bg-primary-100 rounded-lg shadow-lg hover:scale-[1.02] hover:translate-y-[-2px] transition-transform">

      <div className="flex flex-row justify-start items-top mb-3 gap-2 lg:min-h-16">
        <span className="mt-1 text-text-700 leading-relaxed">{icon}</span>
        <h2 className="text-xl md:text-2xl text-text-700 font-semibold">{title}</h2>
      </div>
      <p className="text-lg text-text-700 leading-relaxed">{description}</p>
    </div>
  );
}
