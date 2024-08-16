import type { Meta, StoryObj } from "@storybook/react";
import ImageTextRow from "./";
import { ButtonItem } from "@/types";
import { buttons } from "@/lib/dummyData";

const meta = {
  title: "Components/ImageTextRow",
  component: ImageTextRow,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[526px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageTextRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    title: "Title",
    image: "https://dummyimage.com/100x100.png/f2f2f2/171b60",
    imageAlt: "image",
    description: "This is a description",
    buttons: buttons,
  },
};

export const HighFidelity: Story = {
  args: {
    title: "Bakery",
    image: "/images/icon-bakery.svg",
    imageAlt: "Icon Bakery",
    description:
      "A delicious variety of sweet and savory pastries, breads, and donuts, freshly baked every day.",
    buttons: buttons,
  },
};
