import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Box, Progress, ProgressLabel } from '../..';

const Story: Meta<typeof Progress> = {
  component: Progress,
  title: 'Components/Progress',
};

export default Story;

const Template: StoryFn<typeof Progress> = (args) => (
  <Box width="200px">
    <Progress {...args}>
      <ProgressLabel>{`${args.value}%`}</ProgressLabel>
    </Progress>
  </Box>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  max: { type: { name: 'number', required: false } },
  min: { type: { name: 'number', required: false } },
  value: { type: { name: 'number', required: false } },
};

Basic.args = {
  max: 100,
  min: 0,
  value: 32,
};
