import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NautobotGridLayout } from '../..';
import type { NautobotGridLayoutProps } from '../..';

import { StoryContent } from './utils';

const Story: ComponentMeta<typeof NautobotGridLayout> = {
  component: NautobotGridLayout,
  parameters: { layout: 'fullscreen' },
  title: 'Components/NautobotGridLayout',
};

export default Story;

const Template: ComponentStory<
  (
    props: NautobotGridLayoutProps & { childrenCount?: number }
  ) => ReturnType<typeof NautobotGridLayout>
> = ({
  childrenCount,
  ...args
}: NautobotGridLayoutProps & { childrenCount?: number }) => (
  <>
    <style>
      {`#root {
        height: 100vh;
        overflow: auto;
        width: 100vw;
      }`}
    </style>

    <NautobotGridLayout background="white-0" {...args}>
      {Array.from({
        length: childrenCount ?? 0,
      }).map((_, index) => (
        <StoryContent key={index} />
      ))}
    </NautobotGridLayout>
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
