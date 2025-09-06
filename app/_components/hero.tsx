import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="grid grid-rows-8 grid-cols-6 -mb-[95px] pt-20 auto-rows-[150px] lg:grid-cols-7 place-items-center z-10 justify-items-start">
        <h1 className="sm:text-4xl md:text-6xl lg:text-8xl md:col-span-3 lg:col-span-4 row-start-3 col-start-1 row-span-4 font-bold text-left text-text-700 leading-tight">
          Loving Care<br />
          When You're<br />
          Not There
        </h1>
        <h2 className="md:text-lg lg:text-2xl col-span-3 row-start-7 row-span-1 col-start-1 font-small text-left text-text-700">
        Veterinarian, Pet Sitter & Dog Walker
        </h2>
        <Button text="Book a Service" classes="bg-primary-500 text-text-50 hover:bg-primary-600 col-start-1" />
        <Button text="Contact Me" classes="bg-secondary-200 text-text-700 hover:bg-secondary-400 col-start-3" />

        <div className="relative place-self-stretch row-span-9 col-span-4 md:col-start-4 lg:col-start-5 md:col-end-8 row-start-1" >
        <Image
        className="absolute"
          src="/4.png"
          alt="Next.js logo"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom" }}
          priority
        />
      </div>
      </div>
    </div>
  );
}
