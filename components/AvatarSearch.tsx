"use client";
import * as React from "react";
import * as Separator from "@radix-ui/react-separator";
import * as Avatar from "@radix-ui/react-avatar";
import * as Dialog from "@radix-ui/react-dialog";
import { useLayoutEffect, useRef, useState } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

const Search = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className={cn(
        "w-full  bg-search-background rounded-r-[20px]  focus-visible:outline-none text-text-primary font-cnB",
        "SearchInput",
        className
      )}
      placeholder="搜索"
      {...props}
    ></input>
  );
});

const AvatarProfile = () => {
  const [ref, { width }] = useMeasure();

  return (
    <div
      ref={ref}
      className="w-full h-[80px] flex flex-row gap-[10px] justify-center py-[10px]"
    >
      <Avatar.Root
        asChild
        className="w-[60px] h-full  flex justify-center items-center overflow-hidden select-none flex-0"
      >
        <div>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
            style={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
          <Avatar.Fallback>Y</Avatar.Fallback>
        </div>
      </Avatar.Root>
      {width && width > 90 + 10 + 60 && (
        <div className="font-cnB my-auto w-[90px] ">
          <p className="text-text-primary text-[12px]">Alex Thomas</p>
          <p className="text-text-secondary text-[10px]">alex@gmail.com</p>
        </div>
      )}
    </div>
  );
};

const AvatarSearch = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-row w-full max-w-[500px] min-w-min h-[50px]"
    >
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Avatar.Root
            asChild
            className="w-[60px] h-full  inline-flex justify-center items-center overflow-hidden select-none bg-search-background rounded-l-[20px]"
          >
            <div>
              <Avatar.Image
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
                style={{
                  width: "60%",
                  aspectRatio: "1/1",
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />
              <Avatar.Fallback>Y</Avatar.Fallback>
            </div>
          </Avatar.Root>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="AvatarDialogContent">
            <AvatarProfile />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="bg-search-background h-full w-fit flex items-center">
        <Separator.Root
          orientation="vertical"
          decorative
          className="h-[80%]  w-[1px] bg-white/20"
        />
      </div>
      <Search />
    </div>
  );
});

export default AvatarSearch;
export { Search, AvatarProfile };
