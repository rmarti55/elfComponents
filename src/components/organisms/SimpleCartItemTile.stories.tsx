import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SimpleCartItemTile from './SimpleCartItemTile';

const meta: Meta<typeof SimpleCartItemTile> = {
  title: 'Organisms/SimpleCartItemTile',
  component: SimpleCartItemTile,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
      viewports: {
        mobile1: {
          name: 'Small Mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        mobile2: {
          name: 'Large Mobile',
          styles: {
            width: '428px',
            height: '926px',
          },
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%',
        maxWidth: '100%',
        padding: 0,
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
  render: (args) => {
    const [quantity, setQuantity] = useState(3);
    const [isFavorited, setIsFavorited] = useState(true);
    return (
      <SimpleCartItemTile
        {...args}
        quantity={quantity}
        onQuantityChange={setQuantity}
        isFavorited={isFavorited}
        onFavoriteToggle={() => setIsFavorited((f) => !f)}
      />
    );
  },
  args: {
    imageUrl: '/images/031725_elf_JP_Collection_Bag_064_CLEAN_PLATE_FINAL_IGF.avif',
    isFavorited: true,
    productName: 'Jelly Pop Vault',
    promoMessages: [
      'FREE SHIP & 2 MINIS WITH $35+, BONUS GIFT WITH $50+!',
      'ICON MEMBER FREE SHIPPING!'
    ],
    onRemove: () => alert('Remove clicked!'),
    quantity: 3,
    unitPrice: 40,
  },
}; 