import { cn } from "@/lib/utils";
import * as React from "react";
import { useAnimate, motion } from "framer-motion";
import ActionButton from "./ActionButton";
import styles from "@/styles/modal.module.css";
import * as Dialog from "@radix-ui/react-dialog";

const ModalOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("ModalOverlay", className)} {...props}>
      {children}
    </div>
  );
});

const MotionModalOverlay = motion(ModalOverlay);

const ModalTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  const [scope, animate] = useAnimate();
  return (
    <ActionButton ref={ref} {...props} onClick={() => {}}>
      {children}
      <ModalOverlay ref={scope} />
    </ActionButton>
  );
});

export { ModalOverlay, ModalTrigger, MotionModalOverlay };
