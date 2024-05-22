"use client";
import {
  BottomNavi,
  NaviContext,
  HeaderNavi,
  HeaderTitle,
} from "@/components/Navi";
import { useMeasure } from "@uidotdev/usehooks";
import { useState } from "react";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [selected, setSelected] = useState(0);
  const [ref, { height }] = useMeasure();
  return (
    <NaviContext.Provider value={{ height, selected, setSelected }}>
      <div className="flex flex-col items-center w-full  ">
        {children}
        <BottomNavi ref={ref} />
      </div>
    </NaviContext.Provider>
  );
}
