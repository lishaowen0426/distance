"use client";
import { HeadCard, Carousel } from "@/components/CardCarousel";
import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  ComponentPropsWithoutRef,
  useContext,
  RefObject,
  useMemo,
} from "react";
import { LoadingIcon } from "./Icons";
import AvatarSearch from "@/components/AvatarSearch";
import ActionButton from "./ActionButton";
import useContentContainer from "./ContentContainer";
import { type TopicResponse } from "./ContentContainer";
import {
  useRenderCount,
  useRenderInfo,
  useIntersectionObserver,
  useMeasure,
} from "@uidotdev/usehooks";
import {
  TopicCard,
  TOPIC_CARD_HEIGHT,
  TOPIC_GAP,
  TopicContainer,
  TopicNavi,
  TopicNaviItem,
  TopicCardSkeleton,
  FETCH_COUNT,
  type TopicContent,
} from "@/components/TopicCard";
import { NaviContext } from "./Navi";
import { cn } from "@/lib/utils";

const SLIDES = Array.from(Array(20).keys());
const NAVI = [
  "体育",
  "音乐",
  "文学",
  "美食",
  "电影",
  "电视剧",
  "舞蹈",
  "健身",
  "科技",
  "金融",
];

export default function TopicPage() {
  const [upperRef, { height: upperHeight }] = useMeasure(); // there is setState inside the returned ref callback
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
    fetchUrl,
    trigger,
    containerRef,
  });

  return (
    <Fragment>
      <div className="w-full px-[1rem]">
        <div
          className="w-full before:block before:w-full before:h-[20px]"
          id="TopicPageUpper"
          ref={upperRef}
        >
          <AvatarSearch />
          <Carousel className="mt-[20px]">
            {SLIDES.map((index) => {
              return (
                <HeadCard key={index}>
                  <div className="h-full w-full font-cnB  text-text-primary text-3xl flex items-center justify-center">
                    {index + 1}
                  </div>
                </HeadCard>
              );
            })}
          </Carousel>
          <TopicNavi>
            {NAVI.map((r, index) => {
              return <TopicNaviItem key={index}>{r}</TopicNaviItem>;
            })}
          </TopicNavi>
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
    </Fragment>
  );
}
