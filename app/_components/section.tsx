export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-w-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
