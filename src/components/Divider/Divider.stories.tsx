import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Divider, Flex } from '../..';

const Story: ComponentMeta<typeof Divider> = {
  component: Divider,
  title: 'Divider',
};

export default Story;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Flex
    align="center"
    background="white-0"
    height={180}
    justify="center"
    padding="md"
    width={180}
  >
    <Divider {...args} />
  </Flex>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  orientation: {
    defaultValue: 'horizontal',
    type: { name: 'enum', value: ['horizontal', 'vertical'], required: false },
  },
};
