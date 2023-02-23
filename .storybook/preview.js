import React from 'react';

import { NautobotUIProvider } from '../src';

export const decorators = [
  (Story) => (
    <NautobotUIProvider>
      <Story />
    </NautobotUIProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F6F6F6',
      },
    ],
  },
};
