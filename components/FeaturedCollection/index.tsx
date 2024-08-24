import Container from "@/components/ui/container";
import ProductCard from "@/components/Cards/ProductCard";
import { CardProduct } from "@/types";
import { twMerge } from "tailwind-merge";
import HeaderLine from "../ui/headerLine";
import { HTMLAttributes } from "react";

const columnSizes = {
  two: "md:grid-cols-2",
  three: "sm:grid-cols-2 md:grid-cols-3",
  four: "md:grid-cols-4",
};

export default function FeaturedCollection({
  title,
  description,
  cardItems,
  columnSize = "three",
  ...props
}: {
  title?: string;
  description?: string;
  cardItems: CardProduct[];
  columnSize?: keyof typeof columnSizes;
} & HTMLAttributes<HTMLElement>) {
  return (
    <section {...props}>
      <Container size="contained">
        {title && (
          <div className="mb-10">
            <h2 className="mb-2 font-pbSpecial text-5xl">{title}</h2>
            {description && <p className="mb-4 text-lg">{description}</p>}

            {title && <HeaderLine />}
          </div>
        )}

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
