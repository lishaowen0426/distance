import React from "react";
import { BackwardButton } from "@/components/ActionButton";

const AuthHeader = () => {
  return (
    <div className="flex p-[18px]">
      <BackwardButton />
    </div>
  );
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <AuthHeader />
      <div className="h-[80px]"></div>
      {children}
    </div>
  );
}
