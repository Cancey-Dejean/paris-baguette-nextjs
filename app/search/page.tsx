"use client";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import SearchBox from "@/components/SearchBar/SearchBox";
import Container from "@/components/ui/container";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

// async function getSearchResults(query: string) {
//   // Replace this with your actual search logic
//   // This could be a database query, API call, etc.
//   const res = await fetch(
//     `https://api.example.com/search?q=${encodeURIComponent(query)}`,
//     { cache: "no-store" },
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch search results");
//   }
//   return res.json();
// }

// async function SearchResults({ query }: { query: string }) {
//   const results = await getSearchResults(query);

//   return (
//     <ul>
//       {results.map((result: any) => (
//         <li key={result.id}>{result.title}</li>
//       ))}
//     </ul>
//   );
// }

export default function SearchPage({
  searchParams,
}: {
  searchParams: { s: string };
}) {
  const query = searchParams.s || "";
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    router.push(`/search?s=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <Hero
        size="short"
        headline="Search"
        mainImage="/images/hero.jpg"
        mainImageAlt="Hero Image"
      />
      <SearchBox initialQuery={query} onSearch={handleSearch} />
      <section>
        <Container>
          <div className="flex flex-col gap-4">
            <h2 className="font-pbSpecial text-3xl leading-none text-primary">
              {0} results found for: {query}
            </h2>

            <p>No results. Maybe try searching for something else?</p>
          </div>
          {/* <Suspense fallback={<div>Loading...</div>}>
        <SearchResults query={query} />
      </Suspense> */}
        </Container>
      </section>
    </>
  );
}
