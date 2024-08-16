import type { Meta, StoryObj } from "@storybook/react";
import ImageTextStack from "./";
import { buttons, rowItemsHi, rowItemsLo } from "@/lib/dummyData";

const meta = {
  title: "Components/ImageTextStack",
  component: ImageTextStack,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ImageTextStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    mainImage: "https://dummyimage.com/864x1426.png/faf5f1/171b60",
    mainImageAlt: "Phone image",
    rowItems: rowItemsLo,
  },
};

export const HighFidelity: Story = {
  args: {
    mainImage: "/images/food-spread.jpg",
    mainImageAlt: "Food Spread",
    rowItems: rowItemsHi,
  },
};
