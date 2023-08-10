import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Flex, Text, TreeEdge } from '../..';

const Story: Meta<typeof TreeEdge> = {
  component: TreeEdge,
  title: 'Components/TreeEdge',
};

export default Story;

const Template: StoryFn<typeof TreeEdge> = (args) =>
  args.variant !== undefined ? (
    <Flex height="44px">
      <TreeEdge {...args} />
    </Flex>
  ) : (
    <>
      {[
        'first',
        'default',
        'extension',
        'last',
        'sidebarFirst',
        'sidebar',
        'sidebarExtension',
        'sidebarLast',
      ].map((variant) => (
        <Flex key={variant} alignItems="center" gap="sm" height="44px">
          <TreeEdge variant={variant} {...args} />
          <Text variant="Mono1">{`variant="${variant}"`}</Text>
        </Flex>
      ))}
    </>
  );

export const Basic = Template.bind({});

Basic.argTypes = {
  variant: {
    type: {
      name: 'enum',
      value: [
        'default',
        'extension',
        'first',
        'last',
        'sidebar',
        'sidebarExtension',
        'sidebarFirst',
        'sidebarLast',
      ],
      required: false,
    },
  },
};

Basic.args = {
  variant: 'default',
};

Basic.parameters = { controls: { include: ['variant'] } };

export const Combined = Template.bind({});

Combined.parameters = { controls: { include: [] } };
