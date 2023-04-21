import LinkTo from '@storybook/addon-links/react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useCallback } from 'react';

import { Button, Code, Divider, Flex, Link, Text, useToast } from '../..';
import type { UseToastOptions } from '../..';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Toast = (props: UseToastOptions) => null;

const Story: ComponentMeta<typeof Toast> = {
  component: Toast,
  title: 'Components/Toast',
};

export default Story;

const Template: ComponentStory<typeof Toast> = (args: UseToastOptions) => {
  const toast = useToast({ ...args });

  const onClick = useCallback(() => toast(), [toast]);

  return (
    <Flex align="flex-start" direction="column" gap="sm">
      <Text>
        As opposed to standard JSX components, <Code>Toast</Code> is rendered by{' '}
        <Code>toast</Code> function returned from <Code>useToast</Code> hook.
        For rendering standard JSX components make sure to check out{' '}
        <Link as={LinkTo} kind="Components/Alert" story="Basic">
          Alert
        </Link>
        .
      </Text>
      <Text>
        All parameters passed to <Code>useToast</Code> hook, can also be passed
        to its returned <Code>toast</Code> function. This is especially useful
        in case of dynamic parameters. For example, this call:
      </Text>
      <Text>
        <Code whiteSpace="pre-wrap">
          {"const toast = useToast({ title: 'Title' });\ntoast();"}
        </Code>
      </Text>
      <Text>Is an equivalent of:</Text>
      <Text>
        <Code whiteSpace="pre-wrap">
          {"const toast = useToast();\ntoast({ title: 'Title' });"}
        </Code>
      </Text>
      <Divider marginY="sm" />
      <Text>
        <Code whiteSpace="pre-wrap">
          const toast = useToast({`${JSON.stringify(args, null, 2)}`});
        </Code>
      </Text>
      <Button textStyle="Mono1" onClick={onClick}>
        toast();
      </Button>
    </Flex>
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  duration: {
    defaultValue: 5000,
    type: { name: 'number', required: false },
  },

  isClosable: {
    defaultValue: true,
    type: { name: 'boolean', required: false },
  },

  position: {
    defaultValue: 'top-right',
    type: {
      name: 'enum',
      required: false,
      value: [
        'top-right',
        'top',
        'top-left',
        'bottom-right',
        'bottom',
        'bottom-left',
      ],
    },
  },

  status: {
    defaultValue: 'info',
    type: {
      name: 'enum',
      required: false,
      value: ['error', 'info', 'loading', 'success', 'warning'],
    },
  },
};

Basic.args = {
  description: 'Message',
  title: 'Title',
};
