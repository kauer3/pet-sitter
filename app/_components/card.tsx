export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 bg-primary-100 rounded-lg shadow-lg hover:scale-[1.02] hover:translate-y-[-2px] transition-transform">
      <h2 className="text-xl md:text-2xl text-text-700 font-semibold mb-2 lg:min-h-16">{title}</h2>
      <p className="text-lg text-text-700">{description}</p>
    </div>
  );
}
