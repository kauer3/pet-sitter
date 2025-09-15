import Section from "./_components/section";
import Hero from "./_components/hero";
import Services from "./_components/services";
import About from "./_components/about";
import Testimonials from "./_components/testimonials";
import Book from "./_components/book";

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div className="min-h-screen">
      <main className="flex flex-col justify-items-center">
        <Section>
          <Hero/>
        </Section>
        <Section classes="bg-primary-200 z-10">
          <Services/>
        </Section>
        <Section classes="bg-background-100">
          <About/>
        </Section>
        <Section classes="bg-[#f7f6fd]">
          <Testimonials/>
        </Section>
        <Section classes="bg-primary-100">
          <Book/>
        </Section>
      </main>
      <footer className="h-screen w-screen bg-accent-500 z-10 relative">
      </footer>
    </div>
  );
}
