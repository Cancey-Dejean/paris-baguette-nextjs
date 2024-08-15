import type { Meta, StoryObj } from "@storybook/react";
import SeasonalCollection from "./";
import { cardItemsHi, cardItemsLo, navigation } from "@/lib/dummyData";
import { CardProduct } from "@/types";

const meta = {
  title: "Components/SeasonalCollection",
  component: SeasonalCollection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof SeasonalCollection>;

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
