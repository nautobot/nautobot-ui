import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from '../..';
import { colors, fontWeights } from '../../foundations';

const Story: ComponentMeta<typeof Text> = {
  component: Text,
  title: 'Text',
};

export default Story;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Basic = Template.bind({});

Basic.argTypes = {
  size: {
    defaultValue: 'P1',
    type: { name: 'enum', value: ['P1', 'P2', 'P3'], required: false },
  },
  fontWeight: {
    defaultValue: 'normal',
    type: { name: 'enum', value: Object.keys(fontWeights), required: false },
  },
  color: {
    defaultValue: 'black-0',
    type: { name: 'enum', value: Object.keys(colors), required: false },
  },
};

Basic.args = {
  children: 'Example',
};
