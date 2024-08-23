"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TablerSearch } from "@/components/ui/svgIcons";

type SearchBoxProps = {
  initialQuery: string;
  onSearch: (query: string) => void;
};

export default function SearchBox({ initialQuery, onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="sticky top-0 z-50 bg-secondary py-3">
      <Container className="gap flex h-[38px] items-stretch">
        <div className="w-[50px]">
          <div className={twMerge("relative flex h-full w-full items-center")}>
            <TablerSearch className="size-7" />
          </div>
        </div>

        {/* Search Bar */}
        <form
          className="relative flex h-full w-full items-stretch gap-4"
          onSubmit={handleSubmit}
        >
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="h-full w-full rounded-none px-4 font-pbRegular uppercase focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button type="submit" size="sm" className="rounded-sm uppercase">
            Go
          </Button>
        </form>
      </Container>
    </div>
  );
}
