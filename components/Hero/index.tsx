import Container from "../ui/container";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ButtonGroup from "../ButtonGroup";
import { ButtonItem } from "@/types";

const heroSizes = {
  base: "h-[904px]",
  short: "h-[300px]",
};

export default function Hero({
  headline,
  subHeading,
  buttons = [],
  mainImage = "https://dummyimage.com/1553x1035.png/f2f2f2/171b60",
  mainImageAlt = "Hero Image",
  size = "base",
}: {
  headline: string;
  subHeading?: string;
  buttonText?: string;
  buttonUrl?: string;
  mainImage: string;
  mainImageAlt?: string;
  buttons?: ButtonItem[];
  size?: keyof typeof heroSizes;
}) {
  return (
    <section
      className={twMerge(
        "relative min-h-[500px] p-0",
        "after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-hero after:content-['']",
        heroSizes[size],
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
        <h1 className="font-pbBold text-[90px] text-white">{headline}</h1>

        {subHeading && (
          <h2 className="font-pbSpecial text-5xl text-white">{subHeading}</h2>
        )}

        {buttons.length > 0 && (
          <div className="mt-10 flex justify-center">
            <ButtonGroup buttons={buttons} />
          </div>
        )}
      </Container>
    </section>
  );
}
