import type { Meta, StoryObj } from '@storybook/react';
import CartItemTextBlock from './CartItemTextBlock';

const meta: Meta<typeof CartItemTextBlock> = {
  title: 'Molecules/CartItemTextBlock',
  component: CartItemTextBlock,
  parameters: {
    layout: 'centered',
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productName: 'Jelly Pop Dew Primer',
    promoMessages: [
      'FREE SHIP & 2 MINIS WITH $35+, BONUS GIFT WITH $50+!',
      'ICON MEMBER FREE SHIPPING!'
    ],
    onRemove: () => alert('Remove clicked!'),
  },
}; 