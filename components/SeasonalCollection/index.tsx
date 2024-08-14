import Container from "@/components/ui/container";
import ProductCard from "@/components/Cards/ProductCard";
import { ProductCardLink } from "@/types";

const cards = [
  {
    image: "/images/lemon-citrus-cake.jpg",

    imageAlt: "Slices of Citrus",
    title: "Slices of Citrus",
    description: "Slice into summer with our Lemon Citrus Layer Cake!",
    links: [
      {
        label: "Order Now",
        url: "/cart",
        icon: "cart",
      },
      {
        label: "Details",
        url: "/details",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "/images/lemon-supreme.jpg",
    imageAlt: "Supremely Summer",
    title: "Supremely Summer",
    description:
      "Make your summer supreme with Paris Baguette’s NEW Supreme Croissants, available in Lemon or Chocolate.",
    links: [
      {
        label: "Order Now",
        url: "/cart",
        icon: "cart",
      },
      {
        label: "Details",
        url: "/details",
        icon: "circleArrow",
      },
    ],
  },
  {
    image: "/images/beverage-line-up.jpg",
    imageAlt: "Sips of Summer",
    title: "Sips of Summer",
    description:
      "Get refreshed this summer with Caramel Coconut Lattes and Lemonade Refreshers in Watermelon or NEW Mango flavors!",
    links: [
      {
        label: "Order Now",
        url: "/cart",
        icon: "cart",
      },
      {
        label: "Details",
        url: "/details",
        icon: "circleArrow",
      },
    ],
  },
];

export default function SeasonalCollection() {
  return (
    <section>
      <Container size="contained" className="flex gap-9">
        {cards.map(({ image, imageAlt, title, description, links }, index) => (
          <div className="grow" key={index}>
            <ProductCard
              image={image}
              imageAlt={imageAlt}
              title={title}
              description={description}
              links={links as ProductCardLink[]}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
