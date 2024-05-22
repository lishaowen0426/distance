"use client";
import { useMeasure, useIntersectionObserver } from "@uidotdev/usehooks";
import { HeaderNavi, HeaderTitle } from "./Navi";
import useContentContainer from "./ContentContainer";
import { useRef, useMemo } from "react";
import { NaviContext } from "./Navi";
import { Search } from "./AvatarSearch";
import { cn } from "@/lib/utils";
import {
  TopicCard,
  TopicContent,
  TOPIC_CARD_HEIGHT,
  TOPIC_GAP,
  TopicContainer,
  FETCH_COUNT,
} from "./TopicCard";

export default function LikePage() {
  const [upperRef, { height: upperHeight }] = useMeasure();
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggerRef, trigger] = useIntersectionObserver({
    threshold: 0.3,
    root: containerRef.current,
    rootMargin: "0px",
  });
  const fetchUrl = useMemo(() => {
    return `${process.env.NEXT_PUBLIC_API_HOST}/api/topic?from=0&count=${FETCH_COUNT}`;
  }, []);
  const { content, hasMore, hasError } = useContentContainer<TopicContent>({
    upperHeight,
    containerRef,
    fetchUrl,
    trigger,
  });

  return (
    <div className="w-full before:block before:w-full before:h-[20px] px-[1rem]">
      <div
        className="w-full flex flex-col items-center gap-[20px] "
        ref={upperRef}
      >
        <HeaderNavi>
          <HeaderTitle>喜欢</HeaderTitle>
        </HeaderNavi>
        <Search className="rounded-[20px] h-[40px] w-[85%]" />
        <div className="w-full h-[10px]"></div>
      </div>
      <TopicContainer
        ref={containerRef}
        hasError={hasError}
        hasMore={hasMore}
        loadingRef={triggerRef}
      >
        {content.map((t, index) => {
          return <TopicCard {...t} key={index} />;
        })}
      </TopicContainer>
    </div>
  );
}
