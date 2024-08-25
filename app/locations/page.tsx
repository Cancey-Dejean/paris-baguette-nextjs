"use client";
import { useState, useEffect, KeyboardEvent } from "react";
import { DEFAULT_CENTER, locations } from "@/lib/locations";
import Map, { Location } from "@/components/Map";
import { Input } from "@/components/ui/input";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

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

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setFilteredLocations(locations);
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
    } catch (error) {
      console.error("Error geocoding address:", error);
      alert("Unable to find the location. Please try a different search term.");
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

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setSearchTerm("Current Location");
          filterLocationsByDistance(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to retrieve your location. Please try searching manually.",
          );
        },
      );
    } else {
      alert(
        "Geolocation is not supported by your browser. Please try searching manually.",
      );
    }
  };

  const handleUseMyLocation = () => {
    getUserLocation();
  };

  const filterLocationsByDistance = (lat: number, lng: number) => {
    const locationsWithDistance = locations.map((location) => ({
      ...location,
      distance: getDistance(lat, lng, location.lat, location.lng),
    }));
    locationsWithDistance.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    setFilteredLocations(locationsWithDistance);
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
    // Calculate initial distances from the default center
    filterLocationsByDistance(DEFAULT_CENTER.lat, DEFAULT_CENTER.lng);
  }, []);

  return (
    <>
      <Hero mainImage="/images/hero.jpg" headline="Café Locator" size="short" />
      <section className="grid grid-cols-[500px_1fr] gap-[28px]">
        <div>
          <h1 className="mb-4 text-2xl font-medium">Search for a Café</h1>
          <div className="mb-4 flex">
            <Input
              type="text"
              placeholder="Enter zip code or city, state"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              className="border-gray-300 flex-grow rounded-l border p-4 font-pbSpecial placeholder:text-xl"
            />
            <Button onClick={handleSearch} className="rounded-r">
              Search
            </Button>
          </div>
          <Button onClick={handleUseMyLocation} className="mb-4 w-full">
            Use my current location
          </Button>
          <div className="flex flex-col divide-y divide-primary border-y border-y-primary">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <div
                  key={location.name}
                  onClick={() => handleLocationClick(location)}
                  className={`cursor-pointer px-5 py-4 transition-colors duration-300 ease-in-out hover:bg-[#fcf8f0] ${
                    selectedLocation?.name === location.name
                      ? "bg-[#fcf8f0]"
                      : ""
                  }`}
                >
                  <div>{location.name}</div>
                  <div className="text-gray-500 text-sm">
                    <p>{location.address}</p>
                    <p>
                      {location.city}, {location.state}
                    </p>
                  </div>
                  {location.distance !== undefined && (
                    <div className="text-gray-500 text-sm">
                      {location.distance} miles away
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="px-5 py-4">
                No locations found. Try a different search term.
              </div>
            )}
          </div>
        </div>
        <Map
          locations={filteredLocations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          userLocation={userLocation}
        />
      </section>
    </>
  );
}
