import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button
};

export default meta;

export const Solid: StoryObj<typeof Button> = {
  args: {}
};
