import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, Flex } from '../..';
import type { ButtonProps } from '../..';

const Story: ComponentMeta<typeof Button> = {
  argTypes: {
    isDisabled: {
      defaultValue: false,
      control: 'boolean',
    },
    isList: {
      table: {
        disable: true,
      },
    },
  },
  component: Button,
  title: 'Button',
};

export default Story;

const Template: ComponentStory<typeof Button> = ({
  isList,
  ...args
}: ButtonProps & { isList?: boolean }) =>
  isList ? (
    <Flex
      background="white-0"
      borderRadius="sm"
      boxShadow="sub_menu"
      direction="column"
      paddingY="sm"
      width={180}
    >
      <Button {...args} />
      <Button {...args} />
      <Button {...args} />
    </Flex>
  ) : (
    <Button {...args} />
  );

export const Basic = Template.bind({});

Basic.argTypes = {
  size: {
    defaultValue: 'md',
    options: ['md'],
    control: { type: 'radio' },
  },
  variant: {
    defaultValue: 'primaryAction',
    options: ['primaryAction', 'primary', 'secondary', 'criticalAction'],
    control: { type: 'radio' },
  },
};

Basic.args = {
  children: 'Example',
};

export const List = Template.bind({});

List.argTypes = {
  size: {
    defaultValue: 'sm',
    options: ['sm'],
    control: { type: 'radio' },
  },
  variant: {
    defaultValue: 'list',
    options: ['list', 'listSecondary', 'listCritical'],
    control: { type: 'radio' },
  },
};

List.args = {
  children: 'Example',
  isList: true,
};
