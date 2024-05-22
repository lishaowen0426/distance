"use client";
import { useMeasure } from "@uidotdev/usehooks";
import {
  useLayoutEffect,
  useEffect,
  useState,
  forwardRef,
  RefObject,
  ComponentPropsWithoutRef,
  useContext,
} from "react";
import ActionButton from "./ActionButton";
import { LoadingIcon } from "./Icons";
import { cn } from "@/lib/utils";
import { TopicContent } from "./TopicCard";
import { NaviContext } from "./Navi";

export interface ContentContainerProps {
  upperHeight: number | null;
  lowerHeight?: number;
  fetchUrl: string;
  trigger: IntersectionObserverEntry | null;
  containerRef: RefObject<HTMLDivElement>;
}

interface ContentResponse<T> {
  content: T[];
  hasMore: boolean;
}

export type TopicResponse = ContentResponse<TopicContent>;

const NoMoreSpan = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & {
    scrollTo: RefObject<HTMLDivElement>;
    display: boolean;
    text: string;
  }
>(({ scrollTo, display, text, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-fit mx-auto font-cnB underline underline-offset-[6px] text-text-secondary/50 flex items-center mb-[10px] h-[40px]",
        display || "hidden"
      )}
      {...props}
    >
      {`没有更多${text}`}
      <button
        className="text-text-link"
        onClick={(ev) => {
          ev.stopPropagation();
          scrollTo.current?.scroll(0, 0);
        }}
      >
        回到顶部
      </button>
    </div>
  );
});

const FetchTopicFailed = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & { display: boolean; text: string }
>(({ display, text }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex flex-col items-center absolute top-[30%] h-[200px]",
        display || "hidden"
      )}
    >
      <div className="w-fit  font-cnB text-text-primary text-2xl">
        {`获取${text}失败`}
      </div>
      <div className="w-full h-[40px]"></div>
      <ActionButton className="w-[220px] mx-auto"> 重试</ActionButton>
    </div>
  );
});

const Loading = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<"svg"> & { loading: boolean }
>(({ loading }, ref) => {
  return (
    <LoadingIcon
      fill="#42C83C"
      height="64px"
      width="64px"
      className={cn("mx-auto", loading || "hidden")}
      ref={ref}
    />
  );
});

export default function useContentContainer<ContentType>({
  upperHeight,
  lowerHeight: lh,
  fetchUrl,
  trigger,
  containerRef,
}: ContentContainerProps) {
  const [content, setContent] = useState<ContentType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);
  const lowerHeight = lh === undefined ? useContext(NaviContext).height : lh;

  useLayoutEffect(() => {
    if (upperHeight === null || lowerHeight === null) {
      return;
    } else {
      containerRef.current!.style.height = `calc(100vh  - ${
        upperHeight + lowerHeight
      }px)`;
    }
  }, [upperHeight, lowerHeight]);

  useEffect(() => {
    if (trigger?.isIntersecting) {
      fetch(fetchUrl, {
        method: "GET",
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const { content: newContent, hasMore } =
            data as ContentResponse<ContentType>;

          setHasMore(hasMore);
          setContent((c) => c.concat(newContent));
        })
        .catch((e) => {
          setHasError(true);
        });
    }
  }, [trigger?.isIntersecting]);

  return { content: content, hasMore: hasMore, hasError: hasError };
}

export { FetchTopicFailed, Loading, NoMoreSpan };
