import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Select } from '../..';

const Story: ComponentMeta<typeof Select> = {
  argTypes: {
    isDisabled: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isInvalid: {
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    placeholder: {
      defaultValue: 'Select...',
      type: { name: 'string', required: false },
    },
  },
  component: Select,
  title: 'Components/Select',
};

export default Story;

const Template: ComponentStory<typeof Select> = (args) => (
  <Box width="200px">
    <Select
      options={[
        { label: 'Arista', value: 'arista' },
        { label: 'Cisco', value: 'cisco' },
        { label: 'Meraki', value: 'meraki' },
      ]}
      {...args}
    />
  </Box>
);

export const Basic = Template.bind({});

Basic.parameters = {
  controls: { include: ['isDisabled', 'isInvalid', 'placeholder'] },
};

export const Controlled = Template.bind({});

Controlled.argTypes = {
  value: {
    defaultValue: '',
    type: {
      name: 'enum',
      required: false,
      value: ['arista', 'cisco', 'meraki'],
    },
  },
};

Controlled.parameters = {
  controls: { include: ['isDisabled', 'isInvalid', 'placeholder', 'value'] },
};
