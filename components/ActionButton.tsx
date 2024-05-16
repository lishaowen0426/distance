import { cn } from "@/lib/utils";
import React from "react";
import backwardIcon from "@/public/icons/backward-arrow.svg";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

const ActionButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, className, type, form, ...props }, ref) => {
  return (
    <button
      type={type || "button"}
      form={form}
      className={cn(
        "bg-action-button rounded-3xl text-xl font-cnB py-[10px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

const BackwardButton: React.FunctionComponent<
  React.HtmlHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "rgb(255 255 255/3%)",
      }}
      className="w-[36px] h-[36px]  rounded-full flex items-center justify-center"
    >
      <Image src={backwardIcon} alt="backward" className="m-auto" />
    </button>
  );
};
const MoreButton: React.FunctionComponent<
  React.HtmlHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "rgb(255 255 255/3%)",
      }}
      className="w-[36px] h-[36px]  rounded-full flex items-center justify-center "
    >
      <EllipsisVertical stroke="white" />
    </button>
  );
};

export default ActionButton;

export { BackwardButton, MoreButton };
