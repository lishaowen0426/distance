import { BottomNavi } from "@/components/Navi";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center w-full px-[1rem] before:block before:w-full before:h-[20px]">
      {children}
      <BottomNavi />
    </div>
  );
}
