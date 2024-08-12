"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useScrollDirection from "@/hooks/useScrollDirection";
import useScrolled from "@/hooks/useScrolled";
import { twMerge } from "tailwind-merge";
import { EpClose, SolarHamburgerMenuOutline } from "@/constants/svgIcons";
import useBodyOverflow from "@/hooks/useBodyOverflow";

const navigation = [
  {
    label: "Menu",
    url: "/",
    newTab: false,
  },
  {
    label: "Locations",
    url: "/",
    newTab: false,
  },
  {
    label: "Rewards",
    url: "/",
    newTab: false,
  },
  {
    label: "Catering",
    url: "/",
    newTab: false,
  },
];

const callToAction = [
  {
    label: "Order Now",
    url: "/",
    newTab: false,
    variant: "outline-light",
  },
];

export default function Header() {
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

  useBodyOverflow(mobileIsOpen);

  const handleMobileMenu = () => {
    setMobileIsOpen(!mobileIsOpen);
  };

  return (
    <>
      <header
        className={twMerge(
          "fixed top-0 z-50 mx-auto flex h-[90px] w-full items-center justify-between gap-4 bg-primary px-7 text-white transition-all duration-300 ease-in-out",
          !isScrolled ? "bg-transparent" : "",
          window.scrollY > 0 ? "bg-primary" : "",
        )}
      >
        <Link
          href="/"
          className={twMerge(
            "relative block h-[20px] w-[300px]",
            mobileIsOpen ? "z-[51]" : "",
          )}
          onClick={() => setMobileIsOpen(false)}
        >
          <Image src="/images/paris-logo.svg" alt="Logo" fill />
        </Link>

        <nav className="hidden grow justify-end overflow-y-hidden lg:flex">
          <ul
            className={twMerge(
              "flex items-center transition-all duration-300 ease-in-out",
              hidden ? "translate-y-full" : "translate-y-0",
            )}
          >
            {navigation.map(
              ({
                label,
                url,
                newTab,
              }: {
                label: string;
                url: string;
                newTab?: boolean;
              }) => (
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
              ),
            )}
          </ul>
        </nav>

        <ul className="hidden lg:flex">
          {callToAction.map(({ label, url, newTab, variant }) => (
            <li key={label}>
              <Button
                asChild
                variant="outline-light"
                size="sm"
                className={twMerge(
                  isScrolled ? "border-secondary bg-secondary" : "",
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

        <div
          className={twMerge("flex lg:hidden", mobileIsOpen ? "z-[51]" : "")}
        >
          <button
            type="button"
            className={twMerge(
              "relative size-9",
              "[&_svg]:absolute [&_svg]:left-1/2 [&_svg]:top-1/2 [&_svg]:size-9 [&_svg]:translate-x-[-50%] [&_svg]:translate-y-[-50%] [&_svg]:text-primary",
              mobileIsOpen ? "[&_svg]:text-secondary" : "[&_svg]:text-white",
            )}
            onClick={handleMobileMenu}
          >
            <SolarHamburgerMenuOutline
              className={
                mobileIsOpen ? "hidden opacity-0" : "block opacity-100"
              }
            />
            <EpClose
              className={
                mobileIsOpen ? "block opacity-100" : "hidden opacity-0"
              }
            />
          </button>
        </div>
      </header>

      {/*<MobileMenu*/}
      {/*  mobileIsOpen={mobileIsOpen}*/}
      {/*  setMobileIsOpen={{ setMobileIsOpen }}*/}
      {/*/>*/}
    </>
  );
}

function MobileMenu({
  mobileIsOpen,
  setMobileIsOpen,
}: {
  mobileIsOpen: boolean;
  setMobileIsOpen: any;
}) {
  return (
    <div
      className={twMerge(
        mobileIsOpen ? "fixed z-[49] h-full w-full bg-[#000]" : "",
      )}
    >
      Menu
    </div>
  );
}
