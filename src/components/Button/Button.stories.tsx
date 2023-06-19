import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import type { ReactElement } from 'react';

import { Button, Flex } from '../..';
import type { ButtonProps } from '../..';
import * as icons from '../../icons';

const Story: Meta<typeof Button> = {
  argTypes: { isDisabled: { type: { name: 'boolean', required: false } } },
  args: { isDisabled: false },
  component: Button,
  parameters: {
    controls: {
      include: ['isDisabled', 'leftIcon', 'rightIcon', 'size', 'variant'],
    },
  },
  title: 'Components/Button',
};

export default Story;

const Template: StoryFn<typeof Button> = ({
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
  size: { type: { name: 'enum', value: ['md'], required: false } },
  variant: {
    type: {
      name: 'enum',
      value: ['primaryAction', 'primary', 'secondary', 'criticalAction'],
      required: false,
    },
  },
};

Basic.args = {
  children: 'Example',
  size: 'md',
  variant: 'primaryAction',
};

export const List = Template.bind({});

List.argTypes = {
  size: { type: { name: 'enum', value: ['sm'], required: false } },
  variant: {
    type: {
      name: 'enum',
      value: ['list', 'listSecondary', 'listCritical'],
      required: false,
    },
  },
};

List.args = {
  children: 'Example',
  size: 'sm',
  variant: 'list',
};

export const Icon = Template.bind({});

Icon.argTypes = {
  leftIcon: {
    type: { name: 'enum', value: ['', ...Object.keys(icons)], required: false },
  },
  rightIcon: {
    type: { name: 'enum', value: ['', ...Object.keys(icons)], required: false },
  },
};

Icon.args = {
  children: 'Example',
  leftIcon: '' as unknown as ReactElement,
  rightIcon: Object.keys(icons)[0] as unknown as ReactElement,
};

export const TableAction = Template.bind({});

TableAction.argTypes = {
  size: { type: { name: 'enum', value: ['xs'], required: false } },
  variant: { type: { name: 'enum', value: ['table'], required: false } },
  leftIcon: {
    type: { name: 'enum', value: ['', ...Object.keys(icons)], required: false },
  },
};

TableAction.args = {
  size: 'xs',
  variant: 'table',
  leftIcon: Object.keys(icons).find(
    (icon) => icon === 'MeatballsIcon'
  ) as unknown as ReactElement,
};
