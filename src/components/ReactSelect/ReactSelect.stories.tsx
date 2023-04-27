import LinkTo from '@storybook/addon-links/react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useCallback, useMemo, useState } from 'react';

import { Box, Code, Divider, Flex, Link, ReactSelect, Text } from '../..';
import type { ReactSelectOnChangeValue, ReactSelectPropsValue } from '../..';

const Story: ComponentMeta<typeof ReactSelect> = {
  component: ReactSelect,
  title: 'Components/ReactSelect',
};

export default Story;

const Template: ComponentStory<typeof ReactSelect> = (args) => {
  const options = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, index) => ({
        label: `Option ${index + 1}`,
        value: `option-${index + 1}`,
      })),
    []
  );

  type Option = (typeof options)[number];

  const [value, setValue] = useState<ReactSelectPropsValue<Option>>([]);

  const onChange = useCallback(
    (newValue: unknown) =>
      setValue(newValue as ReactSelectOnChangeValue<Option, boolean>),
    [setValue]
  );

  return (
    <Flex direction="column" gap="sm">
      <Text>
        This is a non-native <Code>Select</Code> component based on{' '}
        <Code>react-select</Code> library. If you are not in need for all the
        fancy stuff and just want a simple native browser select box, make sure
        to check out{' '}
        <Link as={LinkTo} kind="Components/Select" story="Basic">
          Select
        </Link>
        .
      </Text>
      <Text>
        To view all the capabilities of this component please refer to{' '}
        <Link href="https://react-select.com/" target="_blank">
          React Select
        </Link>{' '}
        documentation.
      </Text>

      <Divider marginY="sm" />

      <Box width="250px">
        <ReactSelect
          options={options}
          value={value}
          onChange={onChange}
          {...args}
        />
      </Box>
    </Flex>
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  closeMenuOnSelect: {
    defaultValue: true,
    type: { name: 'boolean', required: false },
  },
  hideSelectedOptions: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  isDisabled: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  isMulti: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  isSearchable: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  multiValuesCropText: {
    defaultValue: '{count} more...',
    type: { name: 'string', required: false },
  },
  placeholder: {
    defaultValue: 'Select...',
    type: { name: 'string', required: false },
  },
};
