"use client";
import { cn } from "@/lib/utils";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { BackwardButton, MoreButton } from "./ActionButton";
import { HeaderTitle } from "./Navi";
import { AdjustIcon, LogoutIcon, QuestionIcon, UserIcon } from "./Icons";
import { useMeasure } from "@uidotdev/usehooks";
import { useContext, useRef, useLayoutEffect } from "react";
import { NaviContext } from "./Navi";

interface UserPageInfo {
  avatar?: string;
  name: string;
  email: string;
  joined: number;
  topics: number;
}

const mockUser: UserPageInfo = {
  avatar:
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  name: "立石第一帅",
  email: "ls@ty.com",
  joined: 793,
  topics: 253,
};

const SettingItem = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <div
        className="flex flex-row items-center gap-[10px] font-cnB text-text-primary align-middle"
        {...props}
      >
        {children}
      </div>
    );
  }
);

const NameInfo = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & UserPageInfo
>(({ avatar, name, email, joined, topics, ...props }, ref) => {
  return (
    <div className="w-[100px] mx-auto flex flex-col items-center gap-[10px]">
      <div className="aspect-square rounded-full w-full">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col items-center font-cnB">
        <div className="text-text-primary">{name}</div>
        <div className="text-text-secondary">{email}</div>
      </div>
      <div className="flex flex-row justify-between w-[270px] font-cnB">
        <div className="flex flex-col items-center text-nowrap">
          <div className="text-text-primary">{joined}天</div>
          <div className="text-text-secondary">已加入</div>
        </div>
        <div className="flex flex-col items-center text-nowrap">
          <div className="text-text-primary">{topics}个</div>
          <div className="text-text-secondary">参与话题</div>
        </div>
      </div>
    </div>
  );
});

const HomeTop = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="bg-background-home-top before:block before:w-full before:h-[20px] rounded-b-lg "
      >
        <div className="px-[1rem] flex flex-row justify-between">
          <BackwardButton />
          <HeaderTitle>主页</HeaderTitle>
          <MoreButton />
        </div>
        <div className="h-[30px] w-full"></div>
        <NameInfo {...mockUser} />
        <div className="h-[30px] w-full"></div>
      </div>
    );
  }
);

const settingItems: { icon: React.ReactNode; text: string }[] = [
  { icon: <UserIcon />, text: "个人资料" },
  { icon: <AdjustIcon />, text: "设置" },
  { icon: <QuestionIcon />, text: "关于" },
  { icon: <LogoutIcon />, text: "退出" },
];

const Settings = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="w-full px-[1rem] pt-[1rem] flex flex-col overflow-auto gap-[10px]  HomeSetting"
      >
        {settingItems.map(({ icon, text }, index) => {
          return (
            <SettingItem key={index}>
              {icon}
              {text}
            </SettingItem>
          );
        })}
      </div>
    );
  }
);

export default function HomePage() {
  const { height: lowerHeight } = useContext(NaviContext);
  const [ref, { height: upperHeight }] = useMeasure();
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (lowerHeight === null || upperHeight === null) {
      return;
    } else {
      containerRef.current!.style.height = `calc(100vh   - ${
        upperHeight! + lowerHeight!
      }px)`;
    }
  }, [lowerHeight, upperHeight]);
  return (
    <div className="w-full flex flex-col">
      <HomeTop ref={ref} />
      <Settings ref={containerRef} />
    </div>
  );
}
