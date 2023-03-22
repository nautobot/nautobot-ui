import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import type { ReactElement } from 'react';

import {
  ArrowRightIcon,
  Box,
  Button as ButtonComponent,
  Flex,
  Text as TextComponent,
  Tooltip,
} from '../..';
import type { TooltipProps } from '../..';

const Story: ComponentMeta<typeof Tooltip> = {
  argTypes: {
    hasArrow: {
      defaultValue: true,
      type: { name: 'boolean', required: false },
    },
    isOpen: {
      defaultValue: undefined,
      type: { name: 'boolean', required: false },
    },
    openDelay: {
      defaultValue: 0,
      type: { name: 'number', required: false },
    },
    closeDelay: {
      defaultValue: 0,
      type: { name: 'number', required: false },
    },
    placement: {
      defaultValue: 'bottom',
      type: {
        name: 'enum',
        required: false,
        value: [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-start',
          'bottom',
          'bottom-end',
          'left-start',
          'left',
          'left-end',
        ],
      },
    },
  },
  component: Tooltip,
  parameters: { controls: { exclude: 'type' } },
  title: 'Components/Tooltip',
};

export default Story;

const Template: ComponentStory<
  (props: { type: 'button' | 'text' } & TooltipProps) => ReactElement
> = ({ type, ...args }: { type: 'button' | 'text' } & TooltipProps) => (
  <Tooltip {...args}>
    {type === 'button' ? (
      <ButtonComponent
        leftIcon={<ArrowRightIcon />}
        variant="secondary"
        width={40}
      />
    ) : (
      <TextComponent display="inline">Lorem ipsum...</TextComponent>
    )}
  </Tooltip>
);

export const Button = Template.bind({});

Button.args = {
  label: 'Next',
  type: 'button',
};

export const Text = Template.bind({});

Text.args = {
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'text',
};

export const MultipleElements = Template.bind({});

MultipleElements.args = {
  label: (
    <>
      {[
        { color: 'green-1', count: 11 },
        { color: 'red-1', count: 0 },
      ].map(({ color, count }) => (
        <Flex key={color} alignItems="center" gap="xs" textStyle="P2">
          <Box
            background={color}
            borderRadius="sm"
            flex="none"
            height={18}
            width={18}
          />
          {count}
        </Flex>
      ))}
    </>
  ),
  type: 'button',
};

MultipleElements.parameters = { controls: { exclude: ['label', 'type'] } };
