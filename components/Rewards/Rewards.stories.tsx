import type { Meta, StoryObj } from "@storybook/react";
import Rewards from "./";

const meta = {
  title: "Components/Rewards",
  component: Rewards,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Rewards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    showBackgroundImage: false,
    headline: "Headline",
    showHeadlineImage: true,
    subHeading: "This is a sub-heading",
    mainImage: "https://dummyimage.com/864x1426.png/faf5f1/171b60",
    mainImageAlt: "Phone image",
    description: "This is a description",
    showAppStore: true,
    caption: "Caption goes here",
  },
};

export const HighFidelity: Story = {
  args: {
    showBackgroundImage: true,
    headline: "Rewards",
    showHeadlineImage: true,
    subHeading: "Earn, Redeem, Repeat",
    mainImage: "/images/rewards-phone.jpg",
    mainImageAlt: "Rewards Phone",
    description:
      "Download our new and improved mobile app to start earning free pastries, beverages, and more with PB Rewards. Enjoy a free* pastry with your first purchase when you sign up!",
    showAppStore: true,
    caption: "New PB Rewards members only",
  },
};
