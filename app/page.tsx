import Image from "next/image";
import Section from "./_components/section";
import Hero from "./_components/hero";

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div className="min-h-screen">
      <main className="flex flex-col justify-items-center">
        <Section>
          <Hero/>
        </Section>
      </main>
      <footer className="h-50 w-screen bg-primary-500 z-10 relative">
      </footer>
    </div>
  );
}
