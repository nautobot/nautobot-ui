import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NautobotGrid, NautobotGridItem } from '../..';
import type { NautobotGridItemProps, NautobotGridProps } from '../..';

import { StoryContent } from './utils';

const Story: ComponentMeta<typeof NautobotGrid> = {
  component: NautobotGrid,
  parameters: { layout: 'fullscreen' },
  title: 'Components/NautobotGrid',
};

export default Story;

const Template: ComponentStory<
  (
    props: NautobotGridProps & {
      children?: NautobotGridItemProps[];
      childrenCount?: number;
    }
  ) => ReturnType<typeof NautobotGrid>
> = ({
  children,
  childrenCount,
  ...args
}: NautobotGridProps & {
  children?: NautobotGridItemProps[];
  childrenCount?: number;
}) => (
  <>
    <style>
      {`#root {
        height: 100vh;
        overflow: auto;
        width: 100vw;
      }`}
    </style>

    <NautobotGrid background="white-0" {...args}>
      {children
        ? children.map((props, index) => (
            <NautobotGridItem key={index} {...props}>
              <StoryContent />
            </NautobotGridItem>
          ))
        : Array.from({
            length: childrenCount ?? 0,
          }).map((_, index) => <StoryContent key={index} />)}
    </NautobotGrid>
  </>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  childrenCount: {
    defaultValue: 3,
    name: 'childrenCount (Storybook only, for demonstration purposes.)',
    type: { name: 'number', required: false },
  },

  columns: {
    defaultValue: '1 1 2',
    type: { name: 'string', required: false },
  },

  rows: {
    defaultValue: '',
    type: { name: 'string', required: false },
  },
};

export const WithCellConfig = Template.bind({});

WithCellConfig.argTypes = {
  childrenCount: {
    defaultValue: 3,
    name: 'childrenCount (Storybook only, for demonstration purposes.)',
    type: { name: 'number', required: false },
  },

  columns: {
    defaultValue: { span: '1 1 2' },
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },

  rows: {
    defaultValue: {},
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },
};

export const WithNautobotGridItems = Template.bind({});

WithNautobotGridItems.argTypes = {
  children: {
    defaultValue: [{}, {}, {}, {}, { colSpan: 4, rowSpan: 3 }],
    name: 'children (Storybook only, for demonstration purposes.)',
    type: {
      name: 'array',
      required: false,
      value: {
        name: 'object',
        value: { colSpan: { name: 'number' }, rowSpan: { name: 'number' } },
      },
    },
  },

  columns: {
    defaultValue: {},
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },

  rows: {
    defaultValue: { count: 4 },
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },
};
