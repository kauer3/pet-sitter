export default function Section({
  children,
  classes,
}: Readonly<{
    children: React.ReactNode;
    classes?: string;
  }>) {
  return (
    <div className={`flex min-w-screen flex-col items-center justify-center ${classes}`}>
      {children}
    </div>
  );
}
