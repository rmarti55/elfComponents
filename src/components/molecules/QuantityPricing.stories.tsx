import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import QuantityPricing from './QuantityPricing'

const meta: Meta<typeof QuantityPricing> = {
  title: 'Molecules/QuantityPricing',
  component: QuantityPricing,
  parameters: {
    layout: 'centered',
  },
  tags: [],
  argTypes: {
    quantity: {
      control: { type: 'number', min: 0 },
      description: 'Current quantity',
    },
    unitPrice: {
      control: { type: 'number', min: 0, step: 0.01 },
      description: 'Unit price',
    },
    discountedPrice: {
      control: { type: 'number', min: 0, step: 0.01 },
      description: 'Discounted price (optional)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component to handle state
const QuantityPricingWithState = (args: any) => {
  const [quantity, setQuantity] = useState(args.quantity || 1)
  
  return (
    <QuantityPricing
      {...args}
      quantity={quantity}
      onQuantityChange={setQuantity}
    />
  )
}

export const SimplePricing: Story = {
  render: (args) => <QuantityPricingWithState {...args} />,
  args: {
    quantity: 1,
    unitPrice: 10.00,
    disabled: false,
  },
}

export const DiscountedPricing: Story = {
  render: (args) => <QuantityPricingWithState {...args} />,
  args: {
    quantity: 2,
    unitPrice: 10.00,
    discountedPrice: 8.50,
    disabled: false,
  },
}

export const HighQuantity: Story = {
  render: (args) => <QuantityPricingWithState {...args} />,
  args: {
    quantity: 5,
    unitPrice: 10.00,
    disabled: false,
  },
}

export const ZeroQuantity: Story = {
  render: (args) => <QuantityPricingWithState {...args} />,
  args: {
    quantity: 0,
    unitPrice: 10.00,
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => <QuantityPricingWithState {...args} />,
  args: {
    quantity: 1,
    unitPrice: 10.00,
    disabled: true,
  },
} 