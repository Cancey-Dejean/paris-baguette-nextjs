import Image from "next/image";
import Container from "@/components/ui/container";
import ImageTextRow from "@/components/ImageTextRow";

const rowItems = [
  {
    image: "/images/icon-bakery.svg",
    imageAlt: "icon",
    title: "Bakery",
    description:
      "A delicious variety of sweet and savory pastries, breads, and donuts, freshly baked every day.",
    buttons: [
      {
        label: "Order Now",
        url: "/#cart",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
  {
    image: "/images/icon-cake.svg",
    imageAlt: "icon",
    title: "Cakes",
    description:
      "Made by our master cakers and decorated to perfection, down to the last detail.",
    buttons: [
      {
        label: "Order Now",
        url: "/#cart",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
  {
    image: "/images/icon-catering.svg",
    imageAlt: "Catering Icon",
    title: "Catering",
    description: "Power your gathering with Paris Baguette.",
    buttons: [
      {
        label: "Order Now",
        url: "/#cart",
        variant: "secondary",
        newTab: true,
      },
      {
        label: "Details",
        url: "/#details",
        variant: "tertiary",
        newTab: false,
      },
    ],
  },
];

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
          {rowItems.map(({ image, imageAlt, title, description, buttons }) => (
            <ImageTextRow
              key={title}
              image={image}
              imageAlt={imageAlt}
              title={title}
              description={description}
              buttons={buttons}
            />
          ))}
          {/*<ImageTextRow />*/}
          {/*<ImageTextRow />*/}
          {/*<ImageTextRow />*/}
        </div>
      </Container>
    </section>
  );
}
