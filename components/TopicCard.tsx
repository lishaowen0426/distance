import { cn } from "@/lib/utils";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const topicVariants = cva(
  "TopicCard bg-background-card w-full max-w-[500px] rounded-card h-[100px]",
  {
    variants: {
      city: {
        unknown: "TopicUnknown",
        katsushika: "TopicKatsushika",
      },
    },
    defaultVariants: {
      city: "unknown",
    },
  }
);

interface TopicContent {
  title: string;
  desciption?: string;
  location?: string;
  postedAt: Date;
  online: number;
  member: number;
}

const TopicCard = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof topicVariants>
>(({ city, ...props }, ref) => {
  return <div ref={ref} className={topicVariants({ city })}></div>;
});

const TopicContainer = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full", className)}>
      {children}
    </div>
  );
});

export { TopicCard, TopicContainer };
