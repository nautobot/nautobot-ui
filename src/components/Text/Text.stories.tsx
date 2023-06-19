import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Text } from '../..';
import { colors, fontWeights } from '../../foundations';

const Story: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
};

export default Story;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Basic = Template.bind({});

Basic.argTypes = {
  size: {
    type: { name: 'enum', value: ['P1', 'P2', 'P3'], required: false },
  },
  variant: {
    type: { name: 'enum', value: ['default', 'Mono1'], required: false },
  },
  fontWeight: {
    type: { name: 'enum', value: Object.keys(fontWeights), required: false },
  },
  color: {
    type: { name: 'enum', value: Object.keys(colors), required: false },
  },
};

Basic.args = {
  children: 'Example',
  color: 'black-0',
  fontWeight: 'normal',
  size: 'P1',
  variant: 'default',
};
