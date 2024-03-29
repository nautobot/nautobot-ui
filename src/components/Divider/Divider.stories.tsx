import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Divider, Flex } from '../..';

const Story: Meta<typeof Divider> = {
  component: Divider,
  title: 'Components/Divider',
};

export default Story;

const Template: StoryFn<typeof Divider> = (args) => (
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
    type: { name: 'enum', value: ['horizontal', 'vertical'], required: false },
  },
};

Basic.args = {
  orientation: 'horizontal',
};
