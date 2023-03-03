import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Flex, Text, TreeEdge } from '../..';

const Story: ComponentMeta<typeof TreeEdge> = {
  component: TreeEdge,
  title: 'Components/TreeEdge',
};

export default Story;

const Template: ComponentStory<typeof TreeEdge> = (args) =>
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
          <Text fontFamily="mono" textStyle="Mono1">
            {`variant="${variant}"`}
          </Text>
        </Flex>
      ))}
    </>
  );

export const Basic = Template.bind({});

Basic.argTypes = {
  variant: {
    defaultValue: 'default',
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

Basic.parameters = { controls: { include: ['variant'] } };

export const Combined = Template.bind({});

Combined.parameters = { controls: { include: [] } };
