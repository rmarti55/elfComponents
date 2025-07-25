import type { Meta, StoryObj } from '@storybook/react';
import CartItemTextBlock from './CartItemTextBlock';

const meta: Meta<typeof CartItemTextBlock> = {
  title: 'Molecules/CartItemTextBlock',
  component: CartItemTextBlock,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%',
        maxWidth: '100%',
        padding: '0 16px',
        margin: 0,
        boxSizing: 'border-box',
      }}>
        <Story />
      </div>
    ),
  ],
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