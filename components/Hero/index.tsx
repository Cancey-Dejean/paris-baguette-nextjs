import Container from "../ui/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ButtonGroup from "../ButtonGroup";
import { heroButtons } from "@/lib/dummyData";
import { ButtonItem } from "@/types";

export default function Hero({
  headline,
  subHeading,
  buttons = [],
  mainImage = "https://dummyimage.com/1553x1035.png/f2f2f2/171b60",
  mainImageAlt = "Hero Image",
}: {
  headline: string;
  subHeading?: string;
  buttonText?: string;
  buttonUrl?: string;
  mainImage: string;
  mainImageAlt?: string;
  buttons?: ButtonItem[];
}) {
  return (
    <section
      className={twMerge(
        "relative h-[1035px] min-h-[500px] p-0 text-white",
        "after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-hero after:content-['']",
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={mainImage}
          alt={mainImageAlt}
          fill
          className="object-cover"
        />
      </div>

      <Container className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[90px]">{headline}</h1>

        <h2 className="font-pbSpecial text-5xl">{subHeading}</h2>

        {buttons && (
          <div className="mt-10 flex justify-center">
            <ButtonGroup
              buttons={[
                {
                  label: "View the menu",
                  url: "/",
                },
              ]}
            />
          </div>
        )}
      </Container>
    </section>
  );
}
