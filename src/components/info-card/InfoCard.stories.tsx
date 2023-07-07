import { Meta, StoryObj } from '@storybook/react';
import { InfoCard } from './InfoCard';

const meta: Meta = {
  title: 'Component/InfoCard',
  component: InfoCard
};

export default meta;

export const Info: StoryObj = {
  args: {
    label: 'Some Label',
    value:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit, est dolore expedita, cupiditate ducimus eaque numquam nisi ipsam eius harum iure. Eaque delectus fugit voluptas consequatur impedit, distinctio libero, maiores alias saepe, porro magnam minima ipsum iste enim. Expedita enim voluptatibus alias officiis atque, veniam quae error provident! Inventore?'
  }
};
