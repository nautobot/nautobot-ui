import LinkTo from '@storybook/addon-links/react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Code, Divider, Flex, Link, Select, Text } from '../..';

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
  <Flex direction="column" gap="sm">
    <Text>
      This is a native browser <Code>{'<select>'}</Code> element. If you are
      looking for a select box with more customization options such as styled{' '}
      <Code>{'<option>'}</Code> elements, searchable input, multiselect and
      more, make sure to check out{' '}
      <Link as={LinkTo} kind="Components/ReactSelect" story="Basic">
        ReactSelect
      </Link>
      .
    </Text>

    <Divider marginY="sm" />

    <Box width="250px">
      <Select
        options={[
          { label: 'Arista', value: 'arista' },
          { label: 'Cisco', value: 'cisco' },
          { label: 'Meraki', value: 'meraki' },
        ]}
        {...args}
      />
    </Box>
  </Flex>
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
