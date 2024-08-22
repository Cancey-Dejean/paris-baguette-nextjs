"use client";

import { useCallback, useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";
import Container from "../ui/container";
import WeuiArrowFilled, { TablerSearch } from "../ui/svgIcons";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

export default function SearchBar() {
  const [activeLink, setActiveLink] = useState("");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 5,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-secondary py-3">
      <Container className="flex h-[38px] items-stretch">
        <button
          className={twMerge(
            "relative h-full w-[60px]",
            "after:absolute after:right-0 after:top-0 after:block after:h-full after:w-px after:bg-primary after:opacity-30 after:content-['']",
          )}
        >
          <TablerSearch className="size-7" />
        </button>

        <div className="five-slide relative grow">
          <div className="embla h-full" ref={emblaRef}>
            <div className={twMerge("embla__container h-full")}>
              <div className="embla__slide h-full">
                <Link
                  href="#home"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Cakes
                </Link>
              </div>
              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#about"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Cake Slices
                </Link>
              </div>

              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#home"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Sweets & Pastries
                </Link>
              </div>
              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#about"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Donuts
                </Link>
              </div>
              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#home"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Savories
                </Link>
              </div>
              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#about"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Shareable Breads
                </Link>
              </div>
              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#home"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Breakfast Sandwiches
                </Link>
              </div>
              <div className="embla__slide flex h-full items-center">
                <Link
                  href="#about"
                  className="flex h-full items-center px-7 py-2 uppercase leading-none"
                >
                  Salads, Sandwiches & Wraps
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-1/2 h-full -translate-y-1/2 transform">
            <button
              className={twMerge(
                "relative z-[2] bg-gradient-search",
                "disabled:pointer-events-none disabled:opacity-0",
                "after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-[1] after:block after:h-full after:w-[70px] after:bg-gradient-search after:content-['']",
              )}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <WeuiArrowFilled className="relative z-[2] size-10 rotate-180" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 h-full -translate-y-1/2 transform">
            <button
              className={twMerge(
                "bg-secondary bg-gradient-search disabled:pointer-events-none disabled:opacity-0",
                "after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-[1] after:block after:h-full after:w-[70px] after:rotate-180 after:bg-gradient-search after:content-['']",
              )}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <WeuiArrowFilled className="relative z-[2] size-10" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
