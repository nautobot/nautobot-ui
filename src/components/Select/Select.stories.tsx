import LinkTo from '@storybook/addon-links/react';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Box, Code, Divider, Flex, Link, Select, Text } from '../..';

const Story: Meta<typeof Select> = {
  argTypes: {
    isDisabled: { type: { name: 'boolean', required: false } },
    isInvalid: { type: { name: 'boolean', required: false } },
    placeholder: { type: { name: 'string', required: false } },
  },
  args: {
    isDisabled: false,
    isInvalid: false,
    placeholder: 'Select...',
  },
  component: Select,
  title: 'Components/Select',
};

export default Story;

const Template: StoryFn<typeof Select> = (args) => (
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
    type: {
      name: 'enum',
      required: false,
      value: ['arista', 'cisco', 'meraki'],
    },
  },
};

Controlled.args = {
  value: '',
};

Controlled.parameters = {
  controls: { include: ['isDisabled', 'isInvalid', 'placeholder', 'value'] },
};
