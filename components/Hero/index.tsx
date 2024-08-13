import Container from "../ui/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  return (
    <section
      className={twMerge(
        "relative h-[1035px] min-h-[500px] p-0 text-white",
        "after:bg-gradient-hero after:absolute after:left-0 after:top-0 after:h-full after:w-full after:content-['']",
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
      </div>

      <Container className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[90px]">Squeeze the day</h1>

        <h2 className="font-pbSpecial text-5xl leading-none">
          Dive into our delectable summer menu.
        </h2>

        <Button asChild className="mt-10">
          <Link href="/menu">View the menu</Link>
        </Button>
      </Container>
    </section>
  );
}
