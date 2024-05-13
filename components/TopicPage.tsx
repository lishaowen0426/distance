"use client";
import { HeadCard, Carousel } from "@/components/CardCarousel";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import AvatarSearch from "@/components/AvatarSearch";
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
  type TopicContent,
} from "@/components/TopicCard";

const PREFETCH_RATIO = 0.3;

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

const topics: TopicContent[] = Array(100).fill(1);

export default function TopicPage() {
  const [upperRef, { height: upperHeight }] = useMeasure();
  const [lowerRef, { height: lowerHeight }] = useMeasure();
  const ref = useRef<HTMLDivElement>(null);
  const [triggerRef, trigger] = useIntersectionObserver({
    threshold: 0.3,
    root: ref.current,
    rootMargin: "0px",
  });
  const [fetchCount, setFetchCount] = useState(0);
  const [topics, setTopics] = useState([]);

  console.log(trigger);
  useLayoutEffect(() => {
    ref.current!.style.height = `calc(100vh  - ${
      upperHeight! + lowerHeight!
    }px)`;
    const { height } = ref.current!.getBoundingClientRect();
    setFetchCount(
      Math.ceil(
        Math.ceil(height / (TOPIC_CARD_HEIGHT + TOPIC_GAP)) *
          (1 + PREFETCH_RATIO)
      )
    );
  }, [upperHeight, lowerHeight]);

  useEffect(() => {
    if (upperHeight === null || lowerHeight === null || trigger === null) {
      return;
    }

    if (fetchCount <= 0 || !trigger.isIntersecting) {
      return;
    } else {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}/?from=0&&count=${fetchCount}`);

      console.log(
        "fetch ",
        fetchCount,
        upperHeight,
        lowerHeight,
        trigger?.isIntersecting
      );
    }
  }, [fetchCount, trigger, trigger?.isIntersecting, upperHeight, lowerHeight]);

  return (
    <Fragment>
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
      <TopicContainer ref={ref}>
        {topics.map((t, index) => {
          return <TopicCardSkeleton key={index} />;
        })}
        <div className="w-full h-[900px]"></div>
        <TopicCardSkeleton key="topic-skeleton" ref={triggerRef} />,
      </TopicContainer>
      <div id="TopicPageLower" ref={lowerRef}></div>
    </Fragment>
  );
}
