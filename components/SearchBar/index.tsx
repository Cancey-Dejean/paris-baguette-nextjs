"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Container from "../ui/container";
import { TablerSearch } from "../ui/svgIcons";
import Link from "next/link";

export default function SearchBar() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="bg-secondary py-3">
      <Container className="flex h-[38px] items-stretch">
        <button
          className={twMerge(
            "relative h-full w-[45px]",
            "after:absolute after:right-0 after:top-0 after:block after:h-full after:w-px after:bg-primary after:opacity-30 after:content-['']",
          )}
        >
          <TablerSearch className="size-5" />
        </button>

        <div>
          <ul className="flex">
            <li>
              <Link
                href="#home"
                className={`px-7 py-2 uppercase leading-none ${
                  activeLink === "home" ? "font-pbBold" : "font-pbRegular"
                }`}
                onClick={() => setActiveLink("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`px-7 py-2 font-pbRegular uppercase leading-none ${
                  activeLink === "about" ? "font-pbBold" : "font-pbRegular"
                }`}
                onClick={() => setActiveLink("about")}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
