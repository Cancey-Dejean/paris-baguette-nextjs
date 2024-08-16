import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center bg-[#f7f7f7] p-10">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "tertiary", "outline", "outline-light"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    asChild: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Default: Story = {
//   render: (args) => {
//     return <Button variant="default">Button</Button>;
//   },
// };

export const DefaultSmall: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Button",
    asChild: false,
  },
};

export const DefaultBase: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    asChild: false,
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Button",
    asChild: false,
  },
};

export const SecondaryBase: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Button",
    asChild: false,
  },
};

export const TertiarySmall: Story = {
  args: {
    variant: "tertiary",
    size: "sm",
    children: "Button",
    asChild: false,
  },
};

export const TertiaryBase: Story = {
  args: {
    variant: "tertiary",
    size: "default",
    children: "Button",
    asChild: false,
  },
};

export const OutlineSmall: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: "Button",
    asChild: false,
  },
};

export const OutlineBase: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Button",
    asChild: false,
  },
};

export const OutlineLightSmall: Story = {
  args: {
    variant: "outline-light",
    size: "sm",
    children: "Button",
    asChild: false,
  },
};

export const OutlineLightBase: Story = {
  args: {
    variant: "outline-light",
    size: "default",
    children: "Button",
    asChild: false,
  },
};
