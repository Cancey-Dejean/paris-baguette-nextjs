import type { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {},
};

export const HighFidelity: Story = {
  args: {},
};
