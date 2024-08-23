"use client";

import { useCallback, useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";
import Container from "../ui/container";
import { IcRoundClose, TablerSearch, WeuiArrowFilled } from "../ui/svgIcons";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [activeLink, setActiveLink] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?s=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 3,
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

  const categoryAnchors = [
    {
      label: "Cakes",
      slug: "cakes",
    },
    {
      label: "Cake Slices",
      slug: "cake-slices",
    },
    {
      label: "Sweets & Pastries",
      slug: "sweets-pastries",
    },
    {
      label: "Donuts",
      slug: "donuts",
    },
    {
      label: "Savories",
      slug: "savories",
    },
    {
      label: "Shareable Breads",
      slug: "shareable-breads",
    },
    {
      label: "Breakfast Sandwiches",
      slug: "breakfast-sandwiches",
    },
    {
      label: "Salads, Sandwiches & Wraps",
      slug: "salads-sandwiches-wraps",
    },
    {
      label: "Hot Beverages",
      slug: "hot-beverages",
    },
    {
      label: "Iced Beverages",
      slug: "iced-beverages",
    },
    {
      label: "Frozen Beverages",
      slug: "frozen-beverages",
    },
    {
      label: "Bottled Beverages",
      slug: "bottled-beverages",
    },
    {
      label: "Roll Cakes & Packaged Treats",
      slug: "roll-cakes-packaged-treats",
    },
    {
      label: "Grab & Go",
      slug: "grab-go",
    },
  ];

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-secondary py-3">
      <Container size="contained" className="gap flex h-[38px] items-stretch">
        <div className="w-[45px] shrink-0">
          <button
            title="open Search"
            className={twMerge(
              "relative h-full w-full",
              "after:absolute after:right-0 after:top-0 after:block after:h-full after:w-px after:bg-primary after:opacity-30 after:content-['']",
            )}
            onClick={handleSearchOpen}
          >
            <TablerSearch
              className={twMerge(
                "absolute top-1/2 size-6 -translate-y-1/2 opacity-100",
                searchOpen && "opacity-0",
              )}
            />
            <IcRoundClose
              className={twMerge(
                "absolute top-1/2 size-7 -translate-y-1/2 opacity-0",
                searchOpen && "opacity-100",
              )}
            />
          </button>
        </div>

        <div className="search-slide relative grow overflow-hidden">
          {/* Search Bar */}
          <div
            className={twMerge(
              "absolute left-0 top-0 flex h-full w-full items-stretch gap-4 transition-opacity duration-300 ease-in-out",
              searchOpen
                ? "z-[3] bg-secondary opacity-100"
                : "bg-transparent opacity-0",
            )}
          >
            <form
              onSubmit={handleSubmit}
              className="relative flex h-full w-full items-stretch gap-4"
            >
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="h-full w-full rounded-none px-4 font-pbRegular uppercase focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button type="submit" size="sm" className="rounded-sm uppercase">
                Go
              </Button>
            </form>
          </div>

          <div className="embla h-full" ref={emblaRef}>
            <div className={twMerge("embla__container h-full")}>
              {categoryAnchors.map((anchor) => (
                <div
                  className="embla__slide flex h-full items-center"
                  key={anchor.slug}
                >
                  <Link
                    href={`/menu/#${anchor.slug}`}
                    className={twMerge(
                      "flex h-full items-center px-7 py-2 uppercase leading-none",
                      activeLink === anchor.slug
                        ? "font-pbBold"
                        : "font-pbRegular",
                    )}
                    onClick={() => setActiveLink(anchor.slug)}
                  >
                    {anchor.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-1/2 flex h-full w-[58px] -translate-y-1/2 transform">
            <button
              className={twMerge(
                "relative z-[2] h-full w-full bg-gradient-search-to-left",
                "disabled:pointer-events-none disabled:opacity-0",
                "after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-[1] after:block after:h-full after:w-[80px] after:bg-gradient-search-to-left after:content-['']",
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
                "relative bg-gradient-search-to-right",
                "disabled:pointer-events-none disabled:opacity-0",
                "after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-[1] after:block after:h-full after:w-[80px] after:bg-gradient-search-to-right after:content-['']",
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
