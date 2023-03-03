import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Flex, StatusIndicator, Text } from '../..';

const Story: ComponentMeta<typeof StatusIndicator> = {
  component: StatusIndicator,
  title: 'Components/StatusIndicator',
};

export default Story;

const Template: ComponentStory<typeof StatusIndicator> = (args) => (
  <>
    {[
      'action',
      'critical',
      'default',
      'info',
      'secondary',
      'success',
      'unknown',
    ].map((variant) => (
      <Flex key={variant} align="center" gap="sm">
        <StatusIndicator variant={variant} {...args} />
        <Text variant="Mono1">{`variant="${variant}"`}</Text>
      </Flex>
    ))}
  </>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  breathe: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
};

Basic.parameters = { controls: { include: ['breathe'] } };
