import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import ImageTile from './ImageTile'

const meta: Meta<typeof ImageTile> = {
  title: 'Molecules/ImageTile',
  component: ImageTile,
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
  argTypes: {
    imageUrl: {
      control: { type: 'text' },
      description: 'Product image URL',
    },
    isFavorited: {
      control: { type: 'boolean' },
      description: 'Heart filled state',
    },
    productName: {
      control: { type: 'text' },
      description: 'Product name for accessibility',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component to handle state
const ImageTileWithState = (args: any) => {
  const [isFavorited, setIsFavorited] = useState(args.isFavorited || false)
  
  return (
    <ImageTile
      {...args}
      isFavorited={isFavorited}
      onFavoriteToggle={() => setIsFavorited(!isFavorited)}
    />
  )
}

export const Default: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "/images/85400_OpenA_2_V4_R.avif",
    isFavorited: false,
    productName: "ELF Product 85400",
  },
}

export const Favorited: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "/images/031725_elf_JP_Collection_Bag_064_CLEAN_PLATE_FINAL_IGF.avif",
    isFavorited: true,
    productName: "ELF Collection Bag",
  },
}

export const Lipstick: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "/images/57014_SCMOI_Closed_R.avif",
    isFavorited: false,
    productName: "ELF Lipstick 57014",
  },
}

export const Foundation: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "/images/82680_OpenA_V3_R.avif",
    isFavorited: false,
    productName: "ELF Foundation 82680",
  },
} 