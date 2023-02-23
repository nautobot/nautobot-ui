import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Flex, Frame, Text } from '../..';
import type { FrameProps } from '../..';

const Story: ComponentMeta<typeof Frame> = {
  component: Frame,
  title: 'Frame',
};

export default Story;

const Template: ComponentStory<typeof Frame> = ({
  children,
  ...args
}: FrameProps) => (
  <Flex align="center" justify="center">
    <Text position="absolute" top={0} width={532}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero
      eros, facilisis eu feugiat nec, posuere tincidunt velit. Morbi finibus
      venenatis consectetur. Pellentesque id nisi ac libero consequat tempus
      vitae non ex. Vivamus turpis est, sodales id sagittis quis, consectetur a
      dui. Duis egestas ultricies neque eget venenatis. Donec finibus interdum
      est. Suspendisse malesuada cursus massa ac iaculis. Praesent bibendum arcu
      dignissim eros malesuada, id iaculis mi lobortis. Morbi sollicitudin urna
      justo, a laoreet orci mattis quis.
    </Text>

    <Frame {...args}>
      <Text>{children}</Text>
    </Frame>
  </Flex>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  variant: {
    defaultValue: 'default',
    type: { name: 'enum', required: false, value: ['default', 'light'] },
  },
};

Basic.args = { children: 'Lorem ipsum dolor sit amet...' };

Basic.parameters = { controls: { include: ['variant'] } };
