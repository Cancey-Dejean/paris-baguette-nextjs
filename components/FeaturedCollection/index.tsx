import Container from "@/components/ui/container";
import ProductCard from "@/components/Cards/ProductCard";
import { CardProduct } from "@/types";
import { twMerge } from "tailwind-merge";
import HeaderLine from "../ui/headerLine";

const columnSizes = {
  two: "grid-cols-2",
  three: "grid-cols-3",
  four: "grid-cols-4",
};

export default function FeaturedCollection({
  title,
  description,
  cardItems,
  columnSize = "three",
}: {
  title?: string;
  description?: string;
  cardItems: CardProduct[];
  columnSize?: keyof typeof columnSizes;
}) {
  return (
    <section
      className="bg-[length:1200px_auto]"
      style={{
        backgroundImage: `url("/images/bg-beige-texture.jpg")`,
      }}
    >
      <Container size="contained">
        <div className="mb-10">
          {title && <h2 className="mb-2 font-pbSpecial text-5xl">{title}</h2>}
          {description && <p className="mb-4 text-lg">{description}</p>}

          {title && <HeaderLine />}
        </div>

        {cardItems && cardItems.length > 0 ? (
          <div className={twMerge("grid gap-9", columnSizes[columnSize])}>
            {cardItems.map(
              (
                { image, imageAlt, title, description, cardLinks },
                index: number,
              ) => (
                <div className="grow" key={index}>
                  <ProductCard
                    image={image}
                    imageAlt={imageAlt}
                    title={title}
                    description={description}
                    cardLinks={cardLinks}
                  />
                </div>
              ),
            )}
          </div>
        ) : (
          <p className="text-center">Please add items to section</p>
        )}
      </Container>
    </section>
  );
}
