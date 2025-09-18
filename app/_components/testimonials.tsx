import { Quote, PawPrint } from "lucide-react"

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-20 gap-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text-800">Testimonials</h1>
      <div className="flex flex-col md:flex-row gap-6 mx-5 max-w-2xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <Testimonial
          name="Alice Johnson"
          quote="I couldn&apos;t be happier with Júlia&apos;s pet sitting services. She took such great care of my dog while I was away, and I received daily updates and photos that put my mind at ease."
          petName="Buddy"
          petRelation="Mom"
        />
        <Testimonial
          name="Michael Smith"
          quote="Júlia is a true animal lover. She treated my cat like her own and made sure she was comfortable and happy. I highly recommend her services to anyone in need of a reliable pet sitter."
          petName="Whiskers"
          petRelation="Dad"
        />
        <Testimonial
          name="Samantha Lee"
          quote="Júlia went above and beyond to ensure my pets were well taken care of. She was attentive, caring, and professional throughout the entire process. I will definitely be using her services again in the future."
          petName="Max"
          petRelation="Mom"
        />
      </div>
    </div>
  );
}


 function Testimonial({
  name,
  quote,
  petName,
  petRelation,
}: {
    name: string;
    quote: string;
    petName: string;
    petRelation: string;
  }) {
  return (
    <div className="flex flex-col items-center gap-5 p-5 odd:bg-accent-50 even:bg-primary-50 rounded-lg shadow-lg hover:scale-[1.02] hover:translate-y-[-2px] transition-transform basis-1/3 fade-in">

      <span className="text-xl align-middle text-primary-500 leading-relaxed">
        <Quote size={24} />
      </span>
      <p className="text-lg text-text-700 leading-relaxed italic grow-2">"{quote}"</p>
      <h2 className="text-xl text-text-700 font-semibold">{name}</h2>
      <span className="flex flex-row gap-2 justify-center items-center align-middle text-text-700 leading-relaxed">
        <span className="text-primary-500">
          <PawPrint size={18} />
        </span>
        <h3 className="text-lg text-text-600">{petName}&apos;s {petRelation}</h3>
      </span>
    </div>
  );
}
