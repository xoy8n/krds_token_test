"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onSelect = React.useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const scrollTo = React.useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
      api?.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        scrollTo,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={"outline"}
      size={"icon"}
      className={cn(
        "absolute size-10 rounded-full bg-white border border-[#CDD1D5] text-[#33363D] hover:bg-gray-100 disabled:opacity-50",
        orientation === "horizontal"
          ? "top-1/2 -left-4 md:-left-5 transform -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="Previous slide"
        width={24}
        height={24}
      />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={"outline"}
      size={"icon"}
      className={cn(
        "absolute size-10 rounded-full bg-white border border-[#CDD1D5] text-[#33363D] hover:bg-gray-100 disabled:opacity-50",
        orientation === "horizontal"
          ? "top-1/2 -right-4 md:-right-5 transform -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Image
        src="/icons/arrow-right.svg"
        alt="Next slide"
        width={24}
        height={24}
      />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

function CarouselDots({ className, ...props }) {
  const { selectedIndex, scrollSnaps, scrollTo } = useCarousel();

  return (
    <div
      data-slot="carousel-dots"
      className={cn("flex items-center justify-center gap-1 py-4", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <Button
          key={index}
          data-slot="carousel-dot"
          variant="ghost"
          size="icon"
          className={cn(
            "size-2 rounded-full p-0",
            "transition-colors duration-200 ease-in-out",
            selectedIndex === index
              ? "w-4 bg-[#256EF4]"
              : "bg-[#6D7882] hover:bg-[#4a5560]",
            "disabled:bg-muted-foreground/50"
          )}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

function CarouselPageNumber({ className, ...props }) {
  const { selectedIndex, scrollSnaps } = useCarousel();
  const totalPages = scrollSnaps.length;
  const currentPage = selectedIndex + 1;

  if (totalPages === 0) return null;

  return (
    <div
      data-slot="carousel-page-number"
      className={cn(
        "flex items-center justify-center gap-1 px-4 py-[9px] h-10 border border-[#CDD1D5] rounded-full bg-white text-[17px] font-bold min-w-[66px]",
        className
      )}
      {...props}
    >
      <span className="text-[#052B57]">{currentPage}</span>
      <span className="text-[#1E2124]">/</span>
      <span className="text-[#1E2124]">{totalPages}</span>
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  CarouselPageNumber,
};
