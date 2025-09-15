import { House, MessageCircle, Stethoscope, PawPrint } from "lucide-react"

export default function Book() {
  return (
    <div id="book" className="flex flex-col items-center justify-center pt-12 pb-20 gap-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text-800">Contact Me!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-6 mx-5 max-w-2xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <input type="text" placeholder="Name" className="p-4 rounded-lg bg-[#f7f6fd] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"/>
        <input type="text" placeholder="Pet Name" className="p-4 rounded-lg bg-[#f7f6fd] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"/>
        <input type="text" placeholder="Pet Name" className="p-4 rounded-lg bg-[#f7f6fd] focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"/>
      </div>
    </div>
  );
}
