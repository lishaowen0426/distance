"use client";
import { cn } from "@/lib/utils";
import {
  forwardRef,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useRef,
  RefObject,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as Avatar from "@radix-ui/react-avatar";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { NoMoreSpan, Loading, FetchTopicFailed } from "./ContentContainer";

const TOPIC_CARD_HEIGHT: number = 120;
const TOPIC_GAP: number = 10;
export const FETCH_COUNT = 20;

const topicVariants = cva(
  `TopicCard bg-background-card w-full max-w-[500px] rounded-card h-[120px] flex justify-between`,
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
  id: string;
  title: string;
  desciption?: string;
  location?: string;
  postedAt: string;
  online: number;
  member: number;
}

const TopicHeader = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & { avatarURL?: string }
>(({ avatarURL, className }, ref) => {
  return (
    <div className={cn("flex w-full h-fit", className)}>
      <Avatar.Root
        asChild
        className="aspect-square w-[40px]  flex justify-center items-center overflow-hidden select-none flex-0"
      >
        <div className="h-fit">
          <Avatar.Image
            src={avatarURL}
            alt="Colm Tuite"
            style={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
          <Avatar.Fallback>
            <div className="w-[36px] h-[36px] rounded-full bg-topic-skeleton"></div>
          </Avatar.Fallback>
        </div>
      </Avatar.Root>
      {avatarURL ? (
        <button className="TopicButton flex-1 flex flex-col justify-center  h-[40px]">
          <EllipsisVertical />
        </button>
      ) : (
        <div className="h-[40px] w-[15px] rounded-full bg-topic-skeleton"></div>
      )}
    </div>
  );
});

const TopicCard = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> &
    VariantProps<typeof topicVariants> &
    TopicContent
>(
  (
    {
      id,
      city,
      title,
      desciption,
      location,
      postedAt,
      online,
      member,
      ...props
    },
    ref
  ) => {
    const router = useRouter();
    return (
      <div
        ref={ref}
        className={topicVariants({ city })}
        onClick={() => {
          router.push(`/chatroom?id=${id}`);
        }}
      >
        <div className="TopicText max-w-[50%] flex flex-col justify-between p-[20px] pb-[5px]">
          <div className="font-cnB text-lg" suppressHydrationWarning>
            {title}
          </div>
          <div className="font-cnL text-sm" suppressHydrationWarning>
            {desciption}
          </div>
          <div className="flex font-cnL text-xs gap-[5px] ">
            <div suppressHydrationWarning>{location}</div>
            <div suppressHydrationWarning>{postedAt}</div>
          </div>
        </div>
        <TopicHeader
          className="w-[20%] max-w-[60px] mt-[10px] mr-[10px]"
          avatarURL="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        />
      </div>
    );
  }
);

const TopicCardSkeleton = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div className={topicVariants()} ref={ref}>
      <div className="TopicText w-[70%] flex flex-col justify-between p-[20px] pb-[10px]">
        <div className="w-full h-[28px] bg-topic-skeleton rounded-lg"></div>
        <div className="w-full h-[20px] bg-topic-skeleton rounded-lg"></div>
        <div className="w-[50%] h-[12px] bg-topic-skeleton rounded-lg"></div>
      </div>
      <TopicHeader className="w-[20%] max-w-[60px] mt-[10px] mr-[10px]" />
    </div>
  );
});

const TopicContainer = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & {
    hasError: boolean;
    hasMore: boolean;
    loadingRef: any;
  }
>(({ children, className, hasError, hasMore, loadingRef, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `w-full space-y-[${TOPIC_GAP}px] overflow-auto relative`,
        className
      )}
    >
      <FetchTopicFailed display={hasError} text="话题" />
      {children}
      <Loading ref={loadingRef} loading={hasMore} />
      <NoMoreSpan
        scrollTo={ref as RefObject<HTMLDivElement>}
        display={!hasMore}
        text="话题"
      />
    </div>
  );
});

const TopicNaviItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<"li">>(
  ({ children, className, onClick, ...props }, ref) => {
    return (
      <li
        onClick={onClick}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-cnB text-2xl text-text-unselected  align-middle w-[100px]",
          className
        )}
      >
        {children}
      </li>
    );
  }
);

const TopicNavi: React.FunctionComponent<
  PropsWithChildren<{ className?: string }>
> = ({ className, children }) => {
  return <ul className="TopicNavi">{children}</ul>;
};

export {
  TopicCard,
  TopicContainer,
  TopicNaviItem,
  TopicNavi,
  TopicCardSkeleton,
  TOPIC_CARD_HEIGHT,
  TOPIC_GAP,
  type TopicContent,
};
