import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pt-20 pb-20 gap-12">
      <div className="flex flex-col gap-6 mx-5 max-w-2xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl text-center">
        <p className="text-lg text-justify text-text-900 leading-relaxed italic grow-2">
          I'm always happy to hear from you! Whether you have questions about my services, want to discuss your pet's needs, or just want to say hello, feel free to reach out. You can send me a message thorugh the form above, contact me via email at <a href="mailto:julia505@gmail.com" className="text-primary-700 hover:underline">julia505@gmail.com</a> or connect with me on social media. I look forward to hearing from you!
</p>
        <div className="flex flex-row gap-4 justify-center items-center align-middle text-text-700 leading-relaxed">
          <a href="https://www.instagram.com/julia_vetcare/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-700">
            <Instagram size={32} />
          </a>
          <a href="https://www.linkedin.com/in/júlia-silva-505/" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-700">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
      <p className="text-sm text-text-600">© 2024 Júlia Vet Care. All rights reserved.</p>
    </footer>
  );
}
