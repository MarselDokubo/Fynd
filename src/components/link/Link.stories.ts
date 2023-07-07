import { Meta, StoryObj } from '@storybook/react';
import { LinkComponent } from './Link';

const meta: Meta = {
  title: 'Component/Link',
  component: LinkComponent
};
export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Default: Story = {
  args: {
    variant: 'link',
    href: `#`,
    children: 'Click Link'
  }
};

export const Solid: Story = {
  args: {
    ...Default.args,
    variant: 'solid'
  }
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline'
  }
};
