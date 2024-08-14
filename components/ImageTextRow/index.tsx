import Link from "next/link";
import Image from "next/image";
import { ButtonItem } from "@/types";
import { Button } from "@/components/ui/button";

const buttons: ButtonItem[] = [
  {
    label: "Order Now",
    url: "/#cart",
    variant: "default",
    newTab: true,
  },
  {
    label: "Details",
    url: "/#details",
    variant: "default",
    newTab: false,
  },
];

export default function ImageTextRow() {
  return (
    <div className="[&>hr]:last:hidden">
      <div className="flex items-center gap-8">
        <Image
          src="/images/icon-bakery.svg"
          alt="icon"
          width={100}
          height={90}
        />

        <div className="grow">
          <h3 className="font-pbSpecial mb-1.5 text-[32px] font-semibold leading-none">
            Bakery
          </h3>

          <p className="line-clamp-2 text-lg leading-[1.2]">
            A delicious variety of sweet and savory pastries, breads, and
            donuts, freshly baked every day.
          </p>

          <div className="mt-5 flex items-center gap-5">
            {buttons.map(({ label, url, newTab, variant }: ButtonItem) => (
              <Button asChild variant={variant} size="sm" key={label}>
                <Link
                  href={url}
                  target={newTab ? "_blank" : "_self"}
                  rel={newTab ? "noopener noreferrer" : ""}
                >
                  {label || "Button"}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-10 border-dotted" />
    </div>
  );
}
