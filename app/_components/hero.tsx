import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="relative grid grid-rows-6 grid-cols-7 place-items-center bg-foreground-500 rounded-full z-10 pt-50 pb-20">
        <h1 className="text-8xl col-span-4 col-start-1 row-span-4 font-bold text-left text-text-900 leading-tight">
          Loving Care<br />
          When You're<br />
          Not There
        </h1>
        <h2 className="text-2xl col-span-3 row-span-1 col-start-1 font-small text-left text-text-700">
        Veterinarian, Pet Sitter & Dog Walker
        </h2>
        <button className="bg-primary-500 text-white px-6 py-3 justify-self-stretch mx-6 rounded-xl text-lg font-semibold hover:bg-primary-600 transition-colors col-span-2 row-span-1 col-start-1">
          Book a Service
        </button>
        <button className="bg-secondary-200 text-text-800 px-6 py-3 justify-self-stretch mx-6 rounded-xl text-lg font-semibold hover:bg-secondary-400 transition-colors col-span-2 row-span-1 col-start-3">
          Contact Me
        </button>
        
        <Image
          className="absolute row-span-full col-span-3 col-start-5 row-start-1 -z-10"
          src="/4.png"
          alt="Next.js logo"
          width={450}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
