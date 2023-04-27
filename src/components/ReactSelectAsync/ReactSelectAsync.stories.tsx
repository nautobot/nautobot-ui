import LinkTo from '@storybook/addon-links/react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { Box, Code, Divider, Flex, Link, ReactSelectAsync, Text } from '../..';
import type { ReactSelectOnChangeValue, ReactSelectPropsValue } from '../..';

const Story: ComponentMeta<typeof ReactSelectAsync> = {
  component: ReactSelectAsync,
  title: 'Components/ReactSelectAsync',
};

export default Story;

const Template: ComponentStory<typeof ReactSelectAsync> = (args) => {
  type Option = { label: string; value: string };

  const [value, setValue] = useState<ReactSelectPropsValue<Option>>([]);

  const onChange = useCallback(
    (newValue: unknown) =>
      setValue(newValue as ReactSelectOnChangeValue<Option, boolean>),
    [setValue]
  );

  const loadOptions = useCallback(async (inputValue: string) => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=1000'
    );

    const data: { results: { name: string; url: string }[] } =
      await response.json();

    await new Promise((resolve) => setTimeout(resolve, 500));

    return data.results
      .filter(({ name }) => name.includes(inputValue.trim().toLowerCase()))
      .slice(0, 10)
      .map(({ name }) => ({
        label: name.replace(/^(.)/, (match, p1) => p1.toUpperCase()),
        value: name,
      }));
  }, []);

  return (
    <Flex direction="column" gap="sm">
      <Text>
        This is an asynchronous alternative to <Code>ReactSelect</Code>. Use
        this component only if you need to load options on the fly from an
        external endpoint with <Code>loadOptions</Code> prop, otherwise use{' '}
        <Link as={LinkTo} kind="Components/ReactSelect" story="Basic">
          ReactSelect
        </Link>
        .
      </Text>

      <Divider marginY="sm" />

      <Box width="250px">
        <ReactSelectAsync
          loadOptions={loadOptions}
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
  isLoading: {
    defaultValue: true,
    type: { name: 'boolean', required: false },
  },
  cacheOptions: {
    defaultValue: true,
    type: { name: 'boolean', required: false },
  },
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
  multiValuesCropText: {
    defaultValue: '{count} more...',
    type: { name: 'string', required: false },
  },
  placeholder: {
    defaultValue: 'Select...',
    type: { name: 'string', required: false },
  },
};
