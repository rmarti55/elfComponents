import type { Meta, StoryObj } from '@storybook/react';
import TertiaryCTA from './TertiaryCTA';

const meta: Meta<typeof TertiaryCTA> = {
  title: 'Atoms/TertiaryCTA',
  component: TertiaryCTA,
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