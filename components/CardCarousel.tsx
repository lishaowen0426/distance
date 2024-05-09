"use client";
import { cn } from "@/lib/utils";
import React, {
  forwardRef,
  ComponentPropsWithoutRef,
  ReactNode,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

const cardVariants = cva(["rounded-card"], {
  variants: {
    color: {
      pink: "bg-[#43074B]",
      green: "bg-[#7ECE67]",
    },
    size: {
      middle: "w-[180px] h-[180px]",
    },
    mode: {
      carousel: "SlideCard",
    },
  },
  defaultVariants: {
    color: "green",
    size: "middle",
    mode: "carousel",
  },
});

const HeadCard = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof cardVariants>
>(({ color, size, mode, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("", cardVariants({ color, size, mode }))}>
      {children}
    </div>
  );
});

type CarouselDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const useCarouselDotButton = (
  api?: EmblaCarouselType
): CarouselDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onInit(api);
    onSelect(api);
    api.on("reInit", onInit);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }, [api, onInit, onSelect]);
  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

const CarouselDotButton: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

const Carousel = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarouselDotButton(emblaApi);
  return (
    <div ref={emblaRef} className={cn("HeadCarousel", className)}>
      <div className={cn("HeadCarouselContainer")}>{children}</div>
    </div>
  );
};

export { HeadCard, Carousel };
