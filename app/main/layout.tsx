export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center px-[2rem] before:block before:w-full before:h-[20px]">
      {children}
    </div>
  );
}
