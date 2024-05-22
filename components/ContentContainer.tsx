"use client";
import { useMeasure } from "@uidotdev/usehooks";
import {
  useLayoutEffect,
  useEffect,
  useState,
  forwardRef,
  RefObject,
  Dispatch,
  SetStateAction,
} from "react";
import { TopicContent } from "./TopicCard";

export interface ContentContainerProps {
  restHeight: number | null | undefined;
  containerRef: RefObject<HTMLElement>;
  fetchUrl: string;
  trigger: IntersectionObserverEntry | null;
}

interface ContentResponse<T> {
  content: T[];
  hasMore: boolean;
}

export type TopicResponse = ContentResponse<TopicContent>;

export default function useContentContainer<ContentType>({
  restHeight,
  containerRef,
  fetchUrl,
  trigger,
}: ContentContainerProps) {
  const [content, setContent] = useState<ContentType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    if (restHeight || restHeight === 0) {
      containerRef.current!.style.height = `calc(100vh  - ${restHeight}px)`;
    }
  }, [restHeight]);

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
        });
    }
  }, [trigger?.isIntersecting]);

  return [content, hasMore, hasError];
}
