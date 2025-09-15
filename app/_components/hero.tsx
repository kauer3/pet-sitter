"use client";

import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="grid grid-rows-7 sm:grid-rows-8 grid-cols-10 sm:grid-cols-7 pt-20 translate-x-2 -mb-[45px] sm:-mb-[81px] md:-mb-[98px] lg:-mb-[130px] auto-rows-[70px] sm:auto-rows-[113px] md:auto-rows-[135px] lg:auto-rows-[180px] lg:grid-cols-7 place-items-center z-10 justify-items-start">

        <h1 className="speed-5 text-2xl sm:text-6xl md:text-7xl lg:text-8xl col-span-5 sm:col-span-4 row-start-2 sm:row-start-3 col-start-1 row-span-3 sm:row-span-4 font-bold text-left text-text-700 leading-tight">
          <span className="speed-7">Loving Care</span><br />
          <span className="speed-6">When You're</span><br />
          <span className="speed-5">Not There</span>
        </h1>
        <h2 className="speed-4 text-xs sm:text-[0.95rem] md:text-lg lg:text-2xl col-span-5 sm:col-span-4 row-start-5 sm:row-start-7 col-start-1 font-small text-left text-text-700">
          Veterinarian, Pet Sitter <br className="sm:hidden"/> & Dog Walker
        </h2>

        <div className="relative place-self-stretch row-span-8 sm:row-span-9 col-start-5 col-end-11 sm:col-start-5 sm:col-end-8 row-start-1">
          <Image
            className="absolute speed-1"
            src="/4.png"
            alt="Veterinarian, Pet Sitter & Dog Walker"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom", zIndex: -1 }}
            priority
          />
        </div>
        <Button
          text="Book a Service"
          classes="speed-3 bg-primary-500 text-text-50 hover:bg-primary-600 col-start-1"
        />
        <Button
          text="About Me"
          classes="speed-2 bg-secondary-200 text-text-700 hover:bg-secondary-400 col-start-5 max-sm:justify-self-end"
          onClick={() => window.location.href = '#about'}
        />

      </div>
    </div>
  );
}
