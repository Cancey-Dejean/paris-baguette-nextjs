"use client";
import { useState, useEffect, KeyboardEvent } from "react";
import { DEFAULT_CENTER, locations } from "@/lib/locations";
import Map, { Location } from "@/components/Map";
import { Input } from "@/components/ui/input";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { RiDirectionLine, TablerSearch } from "@/components/ui/svgIcons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import LineMdMapMarkerAlt from "@/components/ui/svgIcons";
import MapCard from "@/components/Cards/MapCard";

type LocationWithDistance = Location & {
  distance?: number;
};

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<
    LocationWithDistance[]
  >([]);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationWithDistance | null>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          filterLocationsByDistance(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          useDefaultLocation();
        },
        { timeout: 0 }, // Set a timeout of 5 seconds
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      useDefaultLocation();
    }
  };

  const useDefaultLocation = () => {
    setUserLocation(DEFAULT_CENTER);
    filterLocationsByDistance(DEFAULT_CENTER.lat, DEFAULT_CENTER.lng);
  };

  const filterLocationsByDistance = (lat: number, lng: number) => {
    const locationsWithDistance = locations.map((location) => ({
      ...location,
      distance: getDistance(lat, lng, location.lat!, location.lng!),
    }));
    locationsWithDistance.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    setFilteredLocations(locationsWithDistance);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setFilteredLocations(locations);
      setErrorMessage(null);
      return;
    }

    try {
      const geocoder = new google.maps.Geocoder();
      const result = await new Promise<google.maps.GeocoderResult>(
        (resolve, reject) => {
          geocoder.geocode({ address: searchTerm }, (results, status) => {
            if (
              status === google.maps.GeocoderStatus.OK &&
              results &&
              results[0]
            ) {
              resolve(results[0]);
            } else {
              reject(new Error("Geocoding failed"));
            }
          });
        },
      );

      const searchLocation = {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
      };

      const locationsWithDistance = locations.map((location) => ({
        ...location,
        distance: getDistance(
          searchLocation.lat,
          searchLocation.lng,
          location.lat,
          location.lng,
        ),
      }));

      locationsWithDistance.sort(
        (a, b) => (a.distance || 0) - (b.distance || 0),
      );
      setFilteredLocations(locationsWithDistance);
      setUserLocation(searchLocation);
      setErrorMessage(null);
    } catch (error) {
      console.error("Error geocoding address:", error);
      setFilteredLocations([]);
      setErrorMessage(
        "Unable to find the location. Please try a different search term.",
      );
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleLocationClick = (location: LocationWithDistance) => {
    setSelectedLocation(location);
  };

  const handleUseMyLocation = () => {
    getUserLocation();
  };

  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 3959; // Radius of the earth in miles
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in miles
    return Math.round(d * 10) / 10; // Round to 1 decimal place
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  useEffect(() => {
    // Show all locations initially
    setFilteredLocations(locations);
    // Try to get user location
    getUserLocation();
  }, []);

  return (
    <>
      <Hero mainImage="/images/hero.jpg" headline="Café Locator" size="short" />
      <section className="grid gap-[28px] lg:grid-cols-[400px_1fr]">
        <div>
          <h1 className="mb-4 text-2xl font-medium">Search for a Café</h1>
          <div className="border-gray-300 relative mb-4 flex rounded-sm border">
            <Input
              type="text"
              placeholder="Enter zip code or city, state"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-grow border-transparent p-4 font-pbSpecial placeholder:text-base"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="absolute right-0 flex size-10 items-center justify-center"
            >
              <TablerSearch className="size-6" />
            </button>
          </div>
          <Button onClick={handleUseMyLocation} className="mb-4 w-full text-sm">
            current location
          </Button>

          <div className="flex h-full max-h-[590px] flex-col divide-y divide-primary overflow-y-scroll border-y border-y-primary">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <div
                  key={location.name}
                  onClick={() => handleLocationClick(location)}
                  className={`cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#fcf8f0] ${
                    selectedLocation?.name === location.name
                      ? "bg-[#fcf8f0]"
                      : ""
                  }`}
                >
                  <MapCard location={location} />
                </div>
              ))
            ) : (
              <div className="px-5 py-4">
                No locations found. Try a different search term.
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex">
          <Map
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            userLocation={userLocation}
          />
        </div>
      </section>
    </>
  );
}
