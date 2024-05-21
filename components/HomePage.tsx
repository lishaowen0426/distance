import { cn } from "@/lib/utils";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { BackwardButton, MoreButton } from "./ActionButton";
import { HeaderTitle } from "./Navi";

const mockAvatar =
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";

const HomeTop = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="bg-background-home-top before:block before:w-full before:h-[20px] "
      >
        <div className="px-[1rem] flex flex-row justify-between">
          <BackwardButton />
          <HeaderTitle>主页</HeaderTitle>
          <MoreButton />
        </div>
        <div className="aspect-square rounded-full">
          <img
            src={mockAvatar}
            alt="avatar"
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </div>
    );
  }
);

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HomeTop />
    </div>
  );
}
