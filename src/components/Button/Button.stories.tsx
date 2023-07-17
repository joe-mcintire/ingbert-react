import React from "react";
import Button from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "../../enums";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: "select",
        labels: Object.keys(Theme),
      },
      options: Object.values(Theme).filter((x) => typeof x === "string"),
      mapping: Theme,
    },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button>Example</Button>,
};
