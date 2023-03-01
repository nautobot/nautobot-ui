import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Flex, Tag, TagCloseButton, TagLabel } from '../..';
import type { TagProps } from '../..';

const Story: ComponentMeta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
};

export default Story;

const Template: ComponentStory<typeof Tag> = ({
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
  isDisabled: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  size: {
    defaultValue: 'md',
    type: { name: 'enum', required: false, value: ['sm', 'md'] },
  },
  variant: {
    defaultValue: 'default',
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
