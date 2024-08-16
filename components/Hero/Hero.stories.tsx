import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./";

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    headline: "Headline",
    subHeading: "This is a sub-heading",
    buttonText: "Button",
    buttonUrl: "#",
    mainImage: "https://dummyimage.com/1553x1035.png/faf5f1/171b60",
    mainImageAlt: "Hero",
  },
};

export const HighFidelity: Story = {
  args: {
    headline: "Squeeze the day",
    subHeading: "Dive into our delectable summer menu.",
    buttonText: "View the menu",
    buttonUrl: "#",
    mainImage: "/images/hero.jpg",
    mainImageAlt: "Hero",
  },
};
