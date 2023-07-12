import { Meta, StoryObj } from "@storybook/react";

import { InputField } from "./InputField";

const meta: Meta = {
  title: "Component/InputField",
  component: InputField
};

export const Default: StoryObj<typeof InputField> = {
  args: {
    type: "text",
    label: "this is the label for the input field"
  }
};

export default meta;
