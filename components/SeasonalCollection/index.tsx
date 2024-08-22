import Container from "@/components/ui/container";
import ProductCard from "@/components/Cards/ProductCard";
import { CardProduct } from "@/types";

export default function SeasonalCollection({
  cardItems,
}: {
  cardItems: CardProduct[];
}) {
  return (
    <>
      {cardItems && cardItems.length > 0 ? (
        <section>
          <Container size="contained" className="flex gap-9">
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
          </Container>
        </section>
      ) : (
        <section className="text-center">Please add items to section</section>
      )}
    </>
  );
}
