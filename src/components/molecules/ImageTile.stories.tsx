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
    imageUrl: "https://via.placeholder.com/200x200/FFB6C1/FFFFFF?text=ELF+Blush",
    isFavorited: false,
    productName: "ELF Blush",
  },
}

export const Favorited: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "https://via.placeholder.com/200x200/FFB6C1/FFFFFF?text=ELF+Blush",
    isFavorited: true,
    productName: "ELF Blush",
  },
}

export const Lipstick: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "https://via.placeholder.com/200x200/FF69B4/FFFFFF?text=ELF+Lipstick",
    isFavorited: false,
    productName: "ELF Lipstick",
  },
}

export const Foundation: Story = {
  render: (args) => <ImageTileWithState {...args} />,
  args: {
    imageUrl: "https://via.placeholder.com/200x200/F5DEB3/FFFFFF?text=ELF+Foundation",
    isFavorited: false,
    productName: "ELF Foundation",
  },
} 