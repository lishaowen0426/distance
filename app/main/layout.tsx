"use client";
import { BottomNavi, NaviContext } from "@/components/Navi";
import { useState } from "react";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [selected, setSelected] = useState(0);
  return (
    <NaviContext.Provider value={{ selected, setSelected }}>
      <div className="flex flex-col items-center w-full px-[1rem] ">
        {children}
        <BottomNavi />
      </div>
    </NaviContext.Provider>
  );
}
