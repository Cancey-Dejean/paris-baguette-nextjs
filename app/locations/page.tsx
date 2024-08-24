"use client";
import { useState } from "react";
import { locations } from "@/lib/locations";
import Map from "@/components/Map";

import { Input } from "@/components/ui/input";
import Hero from "@/components/Hero";

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(term),
    );
    setFilteredLocations(filtered);
  };
  return (
    <>
      <Hero mainImage="/images/hero.jpg" headline="Café Locator" size="short" />
      <section className="grid grid-cols-[500px_1fr] gap-4">
        <div>
          <h1 className="mb-4 text-2xl font-medium">Search for a Café</h1>
          <Input
            type="text"
            placeholder="Search locations"
            value={searchTerm}
            onChange={handleSearch}
            className="border-gray-300 mb-4 w-full rounded border p-2"
          />
        </div>
        <Map locations={filteredLocations} />
      </section>
    </>
  );
}
