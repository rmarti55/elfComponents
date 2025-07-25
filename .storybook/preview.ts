import type { Preview } from "@storybook/react";
import React from 'react';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '0 16px',
        margin: 0,
        boxSizing: 'border-box',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
