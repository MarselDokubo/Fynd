import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../loading";

const meta: Meta<typeof Loading> = {
  title: "Component/Loading",
  component: Loading
};

export default meta;
export const Default: StoryObj<typeof Loading> = {};
