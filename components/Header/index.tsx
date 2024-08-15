"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import useScrolled from "@/hooks/useScrolled";
import { twMerge } from "tailwind-merge";
import useCloseMobileMenuOnResize from "@/hooks/useCloseMobileMenuOnResize";
import MobileMenu from "@/components/Header/MobileMenu";
import { LinkItem, Navigation } from "@/types";
import { cn } from "@/lib/utils";

const callToAction = [
  {
    label: "Order Now",
    url: "/",
    newTab: false,
    variant: "outline-light",
  },
];

export default function Header({
  className,
  logoSrc,
  navigation,
  logoAlt,
}: {
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
  navigation: Navigation;
}) {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const scrollDirection = useScrollDirection();
  const isScrolled = useScrolled();

  useEffect(() => {
    if (scrollDirection === "down") {
      setHidden(true);
    } else if (scrollDirection === "up") {
      setHidden(false);
    }
  }, [scrollDirection]);

  // Close mobile menu on window resize
  useCloseMobileMenuOnResize(() => setMobileIsOpen(false));

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 mx-auto flex w-full items-center justify-between gap-4 bg-primary p-5 text-white transition-all duration-300 ease-in-out lg:p-7",
          isScrolled ? "bg-primary shadow-2xl" : "bg-transparent",
          mobileIsOpen ? "opacity-0" : "opacity-100",
          className,
        )}
      >
        <Link
          href="/"
          className="relative block h-[17px] w-[250px] lg:h-[20px] lg:w-[300px]"
        >
          <span className="sr-only">Link to homepage</span>
          <Image
            src={logoSrc || "/images/paris-logo.svg"}
            alt={logoAlt || "Logo"}
            fill
          />
        </Link>

        <nav className="hidden grow justify-end overflow-y-hidden lg:flex">
          <ul
            className={twMerge(
              "flex items-center transition-all duration-300 ease-in-out",
              hidden ? "translate-y-full" : "translate-y-0",
            )}
          >
            {navigation.map(({ label, url, newTab }: LinkItem) => (
              <li key={label}>
                <Link
                  href={url}
                  target={newTab ? "_blank" : "_self"}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  className="group px-2.5 py-1.5 font-pbBold"
                >
                  <span
                    className={twMerge(
                      "relative",
                      "after:bottom-0 after:mx-auto after:block after:h-0.5 after:w-0 after:translate-x-1/2 after:bg-secondary after:opacity-0 after:transition-all after:duration-200 after:ease-in-out after:content-['']",
                      "group-hover:after:w-[calc(100%-15px)] group-hover:after:translate-x-0 group-hover:after:opacity-100",
                    )}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="hidden lg:flex">
          {callToAction.map(({ label, url, newTab }: LinkItem) => (
            <li key={label}>
              <Button
                asChild
                variant="outline-light"
                size="sm"
                className={twMerge(
                  "hover:border-primary hover:bg-white hover:text-primary",
                  isScrolled
                    ? "border-secondary bg-secondary text-primary"
                    : "hover:border-secondary hover:bg-secondary hover:text-primary",
                )}
              >
                <Link
                  href={url}
                  target={newTab ? "_blank" : "_self"}
                  rel={newTab ? "noopener noreferrer" : undefined}
                >
                  {label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>

        <div className="inline-block lg:hidden">
          <MobileMenu
            navigation={navigation}
            callToAction={callToAction}
            mobileIsOpen={mobileIsOpen}
            setMobileIsOpen={setMobileIsOpen}
          />
        </div>
      </header>
    </>
  );
}
