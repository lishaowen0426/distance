"use client";
import {
  forwardRef,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  FunctionComponent,
  useRef,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { GroupIcon, HomeIcon, SliderIcon, HeartIcon } from "@/components/Icons";

type NaviContextProps = {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

export const NaviContext = createContext<NaviContextProps>(
  {} as NaviContextProps
);

const Marker = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={`w-[36px]  h-[4px] bg-action-button absolute top-0`}
      ></div>
    );
  }
);

const BottomNaviItem: FunctionComponent<
  PropsWithChildren<ComponentPropsWithoutRef<"button">> & {
    index: number;
  }
> = ({ className, children, index, ...props }) => {
  const markerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { selected, setSelected } = useContext(NaviContext);
  const onButtonClick = useCallback(() => {
    setSelected(index);
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "bottom-nav-button h-full aspect-square flex items-center justify-center flex-1 relative",
        selected == index ? "selected" : "",
        className
      )}
      onClick={onButtonClick}
    >
      {selected == index && <Marker ref={markerRef} />}
      {children}
    </button>
  );
};

const BottomNavi = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ComponentPropsWithoutRef<"div">>
>((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-background-secondary w-full h-[70px] fixed left-0 bottom-0 z-[2] flex flex-row justify-center"
    >
      <BottomNaviItem index={0}>
        <SliderIcon />
      </BottomNaviItem>
      <BottomNaviItem index={1}>
        <GroupIcon />
      </BottomNaviItem>
      <BottomNaviItem index={2}>
        <HeartIcon />
      </BottomNaviItem>
      <BottomNaviItem index={3}>
        <HomeIcon />
      </BottomNaviItem>
    </div>
  );
});

export { BottomNavi };
