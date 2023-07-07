import { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';

const meta: Meta = {
  title: 'Component/NotFound',
  component: NotFound
};
export default meta;
type Story = StoryObj<typeof NotFound>;
export const Default: Story = {};
