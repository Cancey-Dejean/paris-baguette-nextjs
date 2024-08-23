import type { Meta, StoryObj } from "@storybook/react";
import FeaturedCollection from ".";
import { cardItemsHi, cardItemsLo, navigation } from "@/lib/dummyData";
import { CardProduct } from "@/types";

const meta = {
  title: "Components/FeaturedCollection",
  component: FeaturedCollection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof FeaturedCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    //
    cardItems: cardItemsLo as CardProduct[],
  },
};

export const HighFidelity: Story = {
  args: {
    cardItems: cardItemsHi as CardProduct[],
  },
};
