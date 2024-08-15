import type { Meta, StoryObj } from "@storybook/react";
import Header from "./";
import { navigation } from "@/lib/dummyData";

const meta = {
  title: "Components/Header",
  component: Header,
  // tags: ["autodocs"],
  parameters: {
    layout: "fullscreen ",
  },
  decorators: [
    (Story) => (
      <div className="bg-primary">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    navigation: {
      description: "Base navigation",
    },
    className: {
      control: false,
      description: "Custom classes to style the '<em>header</em>' tag",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LowFidelity: Story = {
  args: {
    navigation: navigation,
    logoSrc: "/images/paris-logo.svg",
    logoAlt: "Logo",
    className: "sticky",
  },
};

export const HighFidelity: Story = {
  args: {
    navigation: navigation,
    logoSrc: "/images/paris-logo.svg",
    logoAlt: "Logo",
    className: "sticky",
  },
};
