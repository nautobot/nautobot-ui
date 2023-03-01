import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, Flex } from '../..';
import type { ButtonProps } from '../..';
import * as icons from '../../icons';

const Story: ComponentMeta<typeof Button> = {
  argTypes: {
    isDisabled: {
      defaultValue: false,
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
  component: Button,
  parameters: {
    controls: {
      include: ['isDisabled', 'leftIcon', 'rightIcon', 'size', 'variant'],
    },
  },
  title: 'Button',
};

export default Story;

const Template: ComponentStory<typeof Button> = ({
  leftIcon,
  rightIcon,
  ...args
}: ButtonProps) => {
  const isList =
    args.variant === 'list' ||
    args.variant === 'listCritical' ||
    args.variant === 'listSecondary';
  const LeftIcon = icons[leftIcon as unknown as keyof typeof icons];
  const RightIcon = icons[rightIcon as unknown as keyof typeof icons];

  return isList ? (
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
    <Button
      {...(LeftIcon ? { leftIcon: <LeftIcon /> } : undefined)}
      {...(RightIcon ? { rightIcon: <RightIcon /> } : undefined)}
      {...args}
    />
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  size: {
    defaultValue: 'md',
    type: { name: 'enum', value: ['md'], required: false },
  },
  variant: {
    defaultValue: 'primaryAction',
    type: {
      name: 'enum',
      value: ['primaryAction', 'primary', 'secondary', 'criticalAction'],
      required: false,
    },
  },
};

Basic.args = {
  children: 'Example',
};

export const List = Template.bind({});

List.argTypes = {
  size: {
    defaultValue: 'sm',
    type: { name: 'enum', value: ['sm'], required: false },
  },
  variant: {
    defaultValue: 'list',
    type: {
      name: 'enum',
      value: ['list', 'listSecondary', 'listCritical'],
      required: false,
    },
  },
};

List.args = {
  children: 'Example',
};

export const Icon = Template.bind({});

Icon.argTypes = {
  leftIcon: {
    defaultValue: '',
    type: { name: 'enum', value: ['', ...Object.keys(icons)], required: false },
  },
  rightIcon: {
    defaultValue: Object.keys(icons)[0],
    type: { name: 'enum', value: ['', ...Object.keys(icons)], required: false },
  },
};

Icon.args = {
  children: 'Example',
};

export const TableAction = Template.bind({});

TableAction.argTypes = {
  size: {
    defaultValue: 'xs',
    type: { name: 'enum', value: ['xs'], required: false },
  },
  variant: {
    defaultValue: 'table',
    type: { name: 'enum', value: ['table'], required: false },
  },
  leftIcon: {
    defaultValue: Object.keys(icons).find((icon) => icon === 'MeatballsIcon'),
    type: { name: 'enum', value: ['', ...Object.keys(icons)], required: false },
  },
};
