export default function Button({ text, classes }: { text: string; classes?: string }) {
  return (
    <button
      className={`rounded-xl font-semibold transition-colors row-start-8 col-span-2 row-span-1
md:w-40 md:py-3 md:text-lg 
lg:w-60 lg:p-5 lg:text-xl 
${classes}
`}>
      {text}
    </button>
  );
}
