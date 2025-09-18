"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

export default function About() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-stretch justify-stretch pt-12 pb-20 gap-12 gap-6 mx-5 max-w-2xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl"
      id="about"
    >
      <div className="md:col-span-1">
        <h1 className="text-3xl md:text-4xl font-bold text-text-800 mb-10">Hi, I'm Júlia!</h1>
        <p className="mt-4 text-text-600 w-full text-lg md:text-xl leading-relaxed">
          I'm a Veterinary Doctor with over 5 years of experience in animal care. I'm ready to take care, feed, walk and give all the love your pet deserves when you're not around. Your pet's well-being is my top priority, and I treat every animal as if it were my own.
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: 'center',
          containScroll: 'trimSnaps',
          loop: true,
          skipSnaps: false,
        }}
        className="md:col-start-2 md:col-span-1 md:mt-1 max-sm:row-start-2 rounded-lg overflow-hidden shadow-lg"
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/IMG_5196.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "bottom",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5200.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "top",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5201.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "bottom",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5202.HEIC"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "bottom",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5203.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "bottom",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5204.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "bottom",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5205.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "bottom",
              }}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/IMG_5206.JPG"
              alt="Veterinarian, Pet Sitter & Dog Walker"
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "3 / 4",
                objectPosition: "top",
              }}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
