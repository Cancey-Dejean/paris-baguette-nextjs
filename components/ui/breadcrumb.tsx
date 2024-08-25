import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Breadcrumb({ className }: { className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={twMerge(className)}>
      <ol className={twMerge("m-0 list-none p-0")}>
        <li className="before:rotate-15 before:border-current inline before:mx-1 before:inline-block before:h-3 before:border-r before:content-['']">
          <Link href="../../../.." className="underline">
            WAI-ARIA Authoring Practices Guide (APG)
          </Link>
        </li>
        <li className="before:rotate-15 before:border-current inline before:mx-1 before:inline-block before:h-3 before:border-r before:content-['']">
          <Link href="../../../.." className="underline">
            Patterns
          </Link>
        </li>
        <li className="before:rotate-15 before:border-current inline before:mx-1 before:inline-block before:h-3 before:border-r before:content-['']">
          <Link href="../../../.." className="underline">
            Breadcrumb Pattern
          </Link>
        </li>
        <li className="before:rotate-15 before:border-current inline before:mx-1 before:inline-block before:h-3 before:border-r before:content-['']">
          <Link
            href="/product/the-lige"
            aria-current="page"
            className="text-black font-bold no-underline"
          >
            Breadcrumb Example
          </Link>
        </li>
      </ol>
    </nav>
  );
}
