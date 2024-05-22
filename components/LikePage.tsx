import { useMeasure, useIntersectionObserver } from "@uidotdev/usehooks";
import { HeaderNavi, HeaderTitle } from "./Navi";
import { TopicResponse } from "@/app/api/topic/route";
import {
  forwardRef,
  ComponentPropsWithoutRef,
  useRef,
  useContext,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { NaviContext } from "./Navi";
import { Search } from "./AvatarSearch";
import { cn } from "@/lib/utils";
import { NoMoreSpan, FetchTopicFailed, Loading } from "./TopicPage";
import {
  TopicCard,
  TopicContent,
  TOPIC_CARD_HEIGHT,
  TOPIC_GAP,
} from "./TopicCard";

const PREFETCH_RATIO = 0.3;

const LikeContainer = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(`w-full space-y-[${TOPIC_GAP}px] overflow-auto`, className)}
    >
      {children}
    </div>
  );
});
export default function LikePage() {
  const [upperRef, { height: upperHeight }] = useMeasure();
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: lowerHeight } = useContext(NaviContext);
  const [liked, setLiked] = useState<TopicContent[]>([]);
  const [fetchCount, setFetchCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [triggerRef, trigger] = useIntersectionObserver({
    threshold: 0.3,
    root: ref.current,
    rootMargin: "0px",
  });
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    if (lowerHeight === null || upperHeight === null) {
      return;
    } else {
      containerRef.current!.style.height = `calc(100vh - 20px  - ${
        upperHeight! + lowerHeight!
      }px)`;
    }
    const { height } = containerRef.current!.getBoundingClientRect();
    setFetchCount(
      Math.ceil(
        Math.ceil(height / (TOPIC_CARD_HEIGHT + TOPIC_GAP)) *
          (1 + PREFETCH_RATIO)
      )
    );
  }, [lowerHeight, upperHeight]);

  useEffect(() => {
    if (trigger === null) {
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
          if (liked.length > 30) {
            setHasMore(false);
            return;
          }
          const { topics: likedTopics, hasMore } = data as TopicResponse;

          setHasMore(hasMore);
          setLiked((liked) => liked.concat(likedTopics));
        });
    }
  }, [fetchCount, trigger, trigger?.isIntersecting]);

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
      <LikeContainer ref={containerRef}>
        {hasError ? (
          <FetchTopicFailed />
        ) : (
          <>
            {liked.map((t, index) => {
              return <TopicCard {...t} key={index} />;
            })}
            {hasMore ? (
              <Loading ref={triggerRef} />
            ) : (
              <NoMoreSpan scrollTo={ref} />
            )}
          </>
        )}
      </LikeContainer>
    </div>
  );
}
