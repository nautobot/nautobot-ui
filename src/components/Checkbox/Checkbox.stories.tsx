import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Checkbox } from '../..';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
};

export default Story;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});

Basic.argTypes = {
  isDisabled: { type: { name: 'boolean', required: false } },
  size: { type: { name: 'enum', value: ['sm', 'md'], required: false } },
};

Basic.args = {
  children: 'Option',
  isDisabled: false,
  size: 'md',
};

Basic.parameters = {
  controls: { include: ['children', 'isDisabled', 'size'] },
};
