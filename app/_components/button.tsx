export default function Button({
  text,
  classes,
  onClick
}: {
    text: string;
    classes?: string;
    onClick?: () => void;
  }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md font-semibold transition-colors shadow-md row-start-7 sm:row-start-8 col-span-5 sm:col-span-2 row-span-1 
w-30 py-2 text-xs 
sm:w-38 sm:py-3 sm:text-sm 
md:w-46 md:py-3 md:text-lg 
lg:w-60 lg:p-5 lg:text-xl 
${classes}
`}>
      {text}
    </button>
  );
}
