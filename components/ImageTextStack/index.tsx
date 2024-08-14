import Container from "@/components/ui/container";
import Image from "next/image";

export default function ImageTextStack() {
  return (
    <section>
      <Container className="flex items-center gap-5">
        <div className="group relative h-[531px] w-[585px] overflow-hidden rounded-[30px]">
          <Image
            src="/images/food-spread.jpg"
            alt="Food Spread"
            className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            fill
          />
        </div>

        <div>Column Items</div>
      </Container>
    </section>
  );
}
