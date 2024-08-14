import Image from "next/image";
import Container from "@/components/ui/container";
import ImageTextRow from "@/components/ImageTextRow";

export default function ImageTextStack() {
  return (
    <section>
      <Container size="contained" className="flex items-center gap-16">
        <div className="group relative size-[585px] shrink-0 overflow-hidden rounded-[30px]">
          <Image
            src="/images/food-spread.jpg"
            alt="Food Spread"
            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            fill
          />
        </div>

        <div className="grow">
          <ImageTextRow />
          <ImageTextRow />
          <ImageTextRow />
        </div>
      </Container>
    </section>
  );
}
