import { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Link from "next/link";

export type Location = {
  name: string;
  lat: number;
  lng: number;
  address?: string;
  description?: string;
  image?: string;
};

export type MapProps = {
  locations: Location[];
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location | null) => void;
  userLocation: { lat: number; lng: number } | null;
};

const containerStyle = {
  width: "100%",
  height: "600px",
};

const getMarkerIcon = (location: Location) => {
  return {
    url: "/images/paris-locations-marker.svg",
    scaledSize: new google.maps.Size(30, 40),
  };
};

export default function Map({
  locations,
  selectedLocation,
  setSelectedLocation,
  userLocation,
}: MapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.006 });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (userLocation) {
      setCenter(userLocation);
    } else if (locations.length > 0) {
      setCenter({ lat: locations[0].lat, lng: locations[0].lng });
    }
  }, [userLocation, locations]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
          onClick={() => setSelectedLocation(location)}
          icon={getMarkerIcon(location)}
        />
      ))}
      {userLocation && (
        <Marker
          position={userLocation}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
        />
      )}
      {selectedLocation && selectedLocation.lat && selectedLocation.lng && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div>
            <h2>{selectedLocation.name}</h2>
            {selectedLocation.address && <p>{selectedLocation.address}</p>}
            <div className="text-gray-500 text-sm">123-123-4562</div>
            {selectedLocation.description && (
              <p>{selectedLocation.description}</p>
            )}
            <div className="grid grid-cols-2">
              <Link href="#">Visit Café</Link>
              <Link href="#">Get Directions</Link>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
