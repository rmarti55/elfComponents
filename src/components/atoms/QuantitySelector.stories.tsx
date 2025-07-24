import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/provider'
import QuantitySelector from './QuantitySelector'

const meta: Meta<typeof QuantitySelector> = {
  title: 'Atoms/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    quantity: {
      control: { type: 'number', min: 0 },
      description: 'Current quantity value',
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
const QuantitySelectorWithState = (args: any) => {
  const [quantity, setQuantity] = useState(args.quantity || 0)
  
  return (
    <ChakraProvider>
      <QuantitySelector
        {...args}
        quantity={quantity}
        onDecrease={() => setQuantity(Math.max(0, quantity - 1))}
        onIncrease={() => setQuantity(quantity + 1)}
      />
    </ChakraProvider>
  )
}

export const Default: Story = {
  render: (args) => <QuantitySelectorWithState {...args} />,
  args: {
    quantity: 1,
    disabled: false,
  },
}

export const Zero: Story = {
  render: (args) => <QuantitySelectorWithState {...args} />,
  args: {
    quantity: 0,
    disabled: false,
  },
}

export const HighQuantity: Story = {
  render: (args) => <QuantitySelectorWithState {...args} />,
  args: {
    quantity: 10,
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => <QuantitySelectorWithState {...args} />,
  args: {
    quantity: 1,
    disabled: true,
  },
}

export const DisabledAtZero: Story = {
  render: (args) => <QuantitySelectorWithState {...args} />,
  args: {
    quantity: 0,
    disabled: true,
  },
} 