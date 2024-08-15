import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./";
import { cardLinks } from "@/lib/dummyData";

const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[366px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    image: "https://dummyimage.com/1170x580.png/171b60/dddddd",
    imageAlt: "Product Image",
    backgroundImage: "",
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardLinks: cardLinks,
  },
};

export const HighFidelity: Story = {
  args: {
    image: "/images/lemon-citrus-cake.jpg",
    imageAlt: "Product Image",
    backgroundImage: "/images/bg-beige-texture.jpg",
    title: "Slices of Citrus",
    description: "Slice into summer with our Lemon Citrus Layer Cake!",
    cardLinks: cardLinks,
  },
};
