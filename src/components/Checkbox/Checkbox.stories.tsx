import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Checkbox } from '../..';

const Story: ComponentMeta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
};

export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Basic = Template.bind({});

Basic.argTypes = {
  isDisabled: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  size: {
    defaultValue: 'md',
    type: { name: 'enum', value: ['sm', 'md'], required: false },
  },
};

Basic.args = {
  children: 'Option',
};

Basic.parameters = {
  controls: { include: ['children', 'isDisabled', 'size'] },
};
