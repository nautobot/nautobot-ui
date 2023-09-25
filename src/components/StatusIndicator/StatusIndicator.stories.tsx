import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Flex, StatusIndicator, Text } from '../..';

const Story: Meta<typeof StatusIndicator> = {
  component: StatusIndicator,
  title: 'Components/StatusIndicator',
};

export default Story;

const Template: StoryFn<typeof StatusIndicator> = (args) => (
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
    description:
      'Enables an animation on `StatusIndicator` to give it a dynamic, kind of spinner feel. A nice UX touch when a particular status is only temporary and there is an update expected.',
    type: { name: 'boolean', required: false },
  },
};

Basic.args = {
  breathe: false,
};

Basic.parameters = { controls: { include: ['breathe'] } };
