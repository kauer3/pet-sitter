'use client';

import { useState } from "react"
import { handleFormSubmit } from "@/lib/handleFormSubmission";

export default function Book() {
  const [formState, setFormState] = useState({
    name: '',
    petName: '',
    email: '',
    phone: '',
    message: ''
  });

  return (
    <div id="book" className="flex flex-col items-center justify-center pt-12 pb-20 gap-12 w-full">
    <h2 className="text-3xl md:text-4xl font-bold text-text-800">Get in Touch</h2>
    <form onSubmit={(e) => handleFormSubmit(e, formState)} className="grid md:grid-cols-2 gap-4 w-full mx-4 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
      <Input
        label="Name"
        name="name"
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        required
      />
      <Input
        label="Pet Name"
        name="petName"
        onChange={(e) => setFormState({ ...formState, petName: e.target.value })}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        required
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
        required
      />
      <Input
        label="Message"
        name="message"
        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
        textarea
        required
      />
      <button
        type="submit"
        className="p-2 mt-4 rounded-lg shadow-md bg-linear-180 from-[30%] from-primary-400 to-primary-600 hover:from-[45%] hover:bg-primary-500 text-text-50 text-md md:text-lg font-semibold transition-all col-span-full"
      >
        Send Message
      </button>
    </form>
    </div>
  )
}

function Input({
  textarea, label, ...props
} : {
    textarea?: boolean;
    label: string
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
) {
  return (
    <label
      className={`flex flex-col gap-1 ${textarea ? 'col-span-full' : ''}`}
    >
      <span className="text-text-800">
        {label}
        {props.required && <span className="text-primary-500"> *</span>}
      </span>
      {textarea ? (
        <textarea
          className="rounded-lg p-2 bg-[#f7f6fd] h-32 resize-none shadow-md"
          {...props}
        />
      ) : (
          <input
            className="rounded-lg p-2 bg-[#f7f6fd] shadow-md"
            {...props}
          />
        )}
    </label>
  )
}
