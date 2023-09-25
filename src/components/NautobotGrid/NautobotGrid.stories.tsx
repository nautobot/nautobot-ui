import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import type { ReactElement } from 'react';

import { NautobotGrid, NautobotGridItem } from '../..';
import type { NautobotGridItemProps, NautobotGridProps } from '../..';

import { StoryContent } from './utils';

const Story: Meta<typeof NautobotGrid> = {
  component: NautobotGrid,
  parameters: { layout: 'fullscreen' },
  title: 'Components/NautobotGrid',
};

export default Story;

const Template: StoryFn<
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
    name: 'childrenCount (Storybook only, for demonstration purposes.)',
    type: { name: 'number', required: false },
  },
  columns: { type: { name: 'string', required: false } },
  rows: { type: { name: 'string', required: false } },
};

Basic.args = {
  childrenCount: 3,
  columns: '1 1 2',
};

export const WithCellConfig = Template.bind({});

WithCellConfig.argTypes = {
  childrenCount: {
    name: 'childrenCount (Storybook only, for demonstration purposes.)',
    type: { name: 'number', required: false },
  },

  columns: {
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },

  rows: {
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },
};

WithCellConfig.args = {
  childrenCount: 3,
  columns: { span: '1 1 2' },
  rows: {},
};

export const WithNautobotGridItems = Template.bind({});

WithNautobotGridItems.argTypes = {
  children: {
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
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },

  rows: {
    type: {
      name: 'object',
      required: false,
      value: { count: { name: 'number' }, span: { name: 'string' } },
    },
  },
};

WithNautobotGridItems.args = {
  children: [{}, {}, {}, {}, { colSpan: 4, rowSpan: 3 }] as ReactElement[],
  columns: {},
  rows: { count: 4 },
};
