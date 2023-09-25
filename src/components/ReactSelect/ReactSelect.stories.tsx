import LinkTo from '@storybook/addon-links/react';
import type { Meta, StoryFn } from '@storybook/react';
import React, { useCallback, useMemo, useState } from 'react';

import { Box, Code, Divider, Flex, Link, ReactSelect, Text } from '../..';
import type { ReactSelectOnChangeValue, ReactSelectPropsValue } from '../..';

const Story: Meta<typeof ReactSelect> = {
  component: ReactSelect,
  title: 'Components/ReactSelect',
};

export default Story;

const Template: StoryFn<typeof ReactSelect> = (args) => {
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
  closeMenuOnSelect: { type: { name: 'boolean', required: false } },
  hideSelectedOptions: { type: { name: 'boolean', required: false } },
  isDisabled: { type: { name: 'boolean', required: false } },
  isMulti: { type: { name: 'boolean', required: false } },
  isSearchable: { type: { name: 'boolean', required: false } },
  multiValuesCropText: { type: { name: 'string', required: false } },
  placeholder: { type: { name: 'string', required: false } },
};

Basic.args = {
  closeMenuOnSelect: true,
  hideSelectedOptions: false,
  isDisabled: false,
  isMulti: false,
  isSearchable: false,
  multiValuesCropText: '{count} more...',
  placeholder: 'Select...',
};
