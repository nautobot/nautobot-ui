import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Progress, ProgressLabel } from '../..';

const Story: ComponentMeta<typeof Progress> = {
  component: Progress,
  title: 'Components/Progress',
};

export default Story;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Box width="200px">
    <Progress {...args}>
      <ProgressLabel>{`${args.value}%`}</ProgressLabel>
    </Progress>
  </Box>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  max: { defaultValue: 100, type: { name: 'number', required: false } },
  min: { defaultValue: 0, type: { name: 'number', required: false } },
  value: { defaultValue: 32, type: { name: 'number', required: false } },
};
