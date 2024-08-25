import Link from "next/link";
import { Location } from "@/components/Map";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import LineMdMapMarkerAlt, { RiDirectionLine } from "@/components/ui/svgIcons";

export default function MapCard({
  location,
  className,
}: {
  location: Location;
  className?: string;
}) {
  return (
    <div className={cn("max-w-sm p-4", className)}>
      <h3 className="flex items-center justify-between gap-1 text-base">
        <span className="mb-1 font-pbBold uppercase text-primary">
          {location.name}
        </span>

        {location.distance !== undefined && (
          <span className="font-pbRegular text-xs lowercase">
            {location.distance} mi.
          </span>
        )}
      </h3>
      <div className="text-gray-500">
        <p className="text-base">
          {location.address}
          <br />
          {location.city}, {location.state} {location.zipCode}
        </p>
      </div>
      <div
        className={twMerge(
          "mt-4 grid grid-cols-2",
          "[&_a]:flex [&_a]:items-center [&_a]:gap-1 [&_a]:font-pbBold [&_a]:font-bold [&_a]:uppercase [&_a]:text-primary",
        )}
      >
        <Link href={"#"}>
          <span>
            <LineMdMapMarkerAlt />
          </span>
          Visit
        </Link>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
        >
          <span>
            <RiDirectionLine />
          </span>
          Directions
        </Link>
      </div>
    </div>
  );
}
