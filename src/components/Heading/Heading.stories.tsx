import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Heading } from '../..';
import { colors, fontWeights } from '../../foundations';

const Story: ComponentMeta<typeof Heading> = {
  component: Heading,
  title: 'Heading',
};

export default Story;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Basic = Template.bind({});

Basic.argTypes = {
  size: {
    defaultValue: 'H2',
    type: { name: 'enum', value: ['H1', 'H2', 'H3'], required: false },
  },
  as: {
    defaultValue: 'h2',
    type: {
      name: 'enum',
      value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      required: false,
    },
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
