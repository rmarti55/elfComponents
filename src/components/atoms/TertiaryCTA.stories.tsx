import type { Meta, StoryObj } from '@storybook/react';
import TertiaryCTA from './TertiaryCTA';

const meta: Meta<typeof TertiaryCTA> = {
  title: 'Atoms/TertiaryCTA',
  component: TertiaryCTA,
  parameters: {
    layout: 'centered',
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Remove: Story = {
  args: {
    children: 'Remove',
    onClick: () => alert('Remove clicked!'),
  },
};

export const Edit: Story = {
  args: {
    children: 'Edit',
    onClick: () => alert('Edit clicked!'),
  },
}; 