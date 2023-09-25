import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Flex, Tag, TagCloseButton, TagLabel } from '../..';
import type { TagProps } from '../..';

const Story: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Tag',
};

export default Story;

const Template: StoryFn<typeof Tag> = ({
  children, // eslint-disable-line @typescript-eslint/no-unused-vars
  isDisabled,
  ...restArgs
}: TagProps & { isDisabled?: boolean }) => (
  <Flex gap="xs">
    <Tag {...restArgs}>
      <TagLabel>62</TagLabel>
    </Tag>
    <Tag {...restArgs}>
      <TagLabel>First tag</TagLabel>
    </Tag>
    <Tag {...restArgs}>
      <TagLabel>Second tag</TagLabel>
      <TagCloseButton isDisabled={isDisabled} />
    </Tag>
    <Tag {...restArgs}>
      <TagLabel>Third tag</TagLabel>
      <TagCloseButton isDisabled={isDisabled} />
    </Tag>
  </Flex>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  isDisabled: { type: { name: 'boolean', required: false } },
  size: { type: { name: 'enum', required: false, value: ['sm', 'md'] } },
  variant: {
    type: {
      name: 'enum',
      required: false,
      value: [
        'action',
        'critical',
        'default',
        'info',
        'secondary',
        'success',
        'unknown',
      ],
    },
  },
};

Basic.args = {
  isDisabled: false,
  size: 'md',
  variant: 'default',
};
