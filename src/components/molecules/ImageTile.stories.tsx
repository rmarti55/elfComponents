import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import ImageTile from './ImageTile'

const meta: Meta<typeof ImageTile> = {
  title: 'Molecules/ImageTile',
  component: ImageTile,
  parameters: {
    layout: 'centered',
  },
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
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    isFavorited: false,
    productName: "ELF Camo Liquid Blush",
  },
}

export const Favorited: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    isFavorited: true,
    productName: "ELF Camo Liquid Blush",
  },
}

export const Lipstick: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop",
    isFavorited: false,
    productName: "ELF Lipstick",
  },
}

export const Foundation: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
    isFavorited: false,
    productName: "ELF Foundation",
  },
} 