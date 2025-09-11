export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-text-700 mb-4">{description}</p>
    </div>
  );
}
