import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Heading } from '../..';
import { colors, fontWeights } from '../../foundations';

const Story: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
};

export default Story;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const Basic = Template.bind({});

Basic.argTypes = {
  size: {
    type: { name: 'enum', value: ['H1', 'H2', 'H3'], required: false },
  },
  as: {
    type: {
      name: 'enum',
      value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      required: false,
    },
  },
  fontWeight: {
    type: { name: 'enum', value: Object.keys(fontWeights), required: false },
  },
  color: {
    type: { name: 'enum', value: Object.keys(colors), required: false },
  },
};

Basic.args = {
  as: 'h2',
  children: 'Example',
  color: 'black-0',
  fontWeight: 'normal',
  size: 'H2',
};
