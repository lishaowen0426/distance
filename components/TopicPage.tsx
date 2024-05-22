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
import { NaviContext } from "./Navi";
import { cn } from "@/lib/utils";

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

const NoMoreSpan = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & {
    scrollTo: RefObject<HTMLDivElement>;
    display: boolean;
  }
>(({ scrollTo, display, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-fit mx-auto font-cnB underline underline-offset-[6px] text-text-secondary/50 flex items-center mb-[10px] h-[40px]",
        display || "hidden"
      )}
      {...props}
    >
      没有更多话题,
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
  ComponentPropsWithoutRef<"div"> & { display: boolean }
>(({ display }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex flex-col items-center absolute top-[30%] h-[200px]",
        display || "hidden"
      )}
    >
      <div className="w-fit  font-cnB text-text-primary text-2xl">
        获取话题失败
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

export default function TopicPage() {
  const [upperRef, { height: upperHeight }] = useMeasure(); // there is setState inside the returned ref callback
  const { height: lowerHeight } = useContext(NaviContext);
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
    if (upperHeight === null || lowerHeight === null) {
      return;
    }
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
          if (topics.length > 30) {
            setHasMore(false);
            return;
          }
          const { topics: newTopics, hasMore } = data as TopicResponse;

          setHasMore(hasMore);
          setTopics((topics) => topics.concat(newTopics));
        });
    }
  }, [fetchCount, trigger, trigger?.isIntersecting, upperHeight, lowerHeight]);

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
        <TopicContainer ref={ref} className="relative">
          <FetchTopicFailed display={hasError} />
          <>
            {topics.map((t, index) => {
              return <TopicCard {...t} key={index} />;
            })}
            <Loading ref={triggerRef} loading={hasMore} />
            <NoMoreSpan scrollTo={ref} display={!hasMore} />
          </>
        </TopicContainer>
      </div>
    </Fragment>
  );
}

export { NoMoreSpan, FetchTopicFailed, Loading };
