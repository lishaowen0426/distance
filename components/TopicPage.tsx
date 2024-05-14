"use client";
import { HeadCard, Carousel } from "@/components/CardCarousel";
import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  forwardRef,
  ComponentPropsWithoutRef,
} from "react";
import { LoadingIcon } from "./Icons";
import { type TopicResponse } from "@/app/api/topic/route";
import AvatarSearch from "@/components/AvatarSearch";
import ActionButton from "./ActionButton";
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

const NoMoreSpan = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="w-fit mx-auto font-cnB underline underline-offset-[6px] text-text-secondary/50"
      >
        没有更多话题, <span className="text-text-link/50">回到顶部</span>
      </div>
    );
  }
);

const FetchTopicFailed = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center absolute top-[30%] h-[200px] "
    >
      <div className="w-fit  font-cnB text-text-primary text-2xl">
        获取话题失败
      </div>
      <div className="w-full h-[40px]"></div>
      <ActionButton className="w-[220px] mx-auto"> 重试</ActionButton>
    </div>
  );
});

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
  const [topics, setTopics] = useState<TopicContent[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);

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
      console.log("fetch topics");
      fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/topic?from=0&count=${fetchCount}`,
        {
          method: "GET",
        }
      )
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          const { topics: newTopics, hasMore } = data as TopicResponse;
          console.log(newTopics.length);
          console.log(newTopics);
          setHasMore(hasMore);
          setTopics((topics) => {
            topics.push(...newTopics);
            return topics;
          });
        });

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
      <TopicContainer ref={ref} className="relative">
        {hasError ? (
          <FetchTopicFailed />
        ) : (
          <>
            {topics.map((t, index) => {
              console.log(t);
              return <TopicCardSkeleton key={index} />;
            })}
            {hasMore && (
              <LoadingIcon
                fill="#42C83C"
                height="64px"
                width="64px"
                className="mx-auto"
                ref={triggerRef}
              />
            )}
          </>
        )}
      </TopicContainer>
      <div id="TopicPageLower" ref={lowerRef}></div>
    </Fragment>
  );
}
