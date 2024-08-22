import type { Meta, StoryObj } from "@storybook/react";
import Video from ".";

const meta = {
  title: "Components/Video",
  component: Video,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    headline: "Headline",
    subHeading: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    videoUrl: "/videos/placeholder.mp4",
    className: "",
    backgroundImage: "/images/bg-beige-texture.jpg",
  },
};

export const HighFidelity: Story = {
  args: {
    headline: "Welcome to your neighborhood bakery café.",
    subHeading: "Where smiles are served daily",
    description:
      "Enjoy delicious pastries, warm breads, stunning cakes and expertly brewed drinks while feeling right at home.",
    videoUrl: "/videos/PB-2024-Menuboard.mp4",
  },
};
