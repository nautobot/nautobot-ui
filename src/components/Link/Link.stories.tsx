import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Link } from '../..';
import type { LinkProps } from '../..';
import * as icons from '../../icons';

const Story: ComponentMeta<typeof Link> = {
  component: Link,
  title: 'Components/Link',
};

export default Story;

const Template: ComponentStory<typeof Link> = ({
  leftIcon,
  rightIcon,
  ...restArgs
}: LinkProps) => {
  const LeftIcon = icons[leftIcon as unknown as keyof typeof icons];
  const RightIcon = icons[rightIcon as unknown as keyof typeof icons];

  return (
    <Link
      {...(LeftIcon ? { leftIcon: <LeftIcon /> } : undefined)}
      {...(RightIcon ? { rightIcon: <RightIcon /> } : undefined)}
      {...restArgs}
    />
  );
};

export const Basic = Template.bind({});

Basic.argTypes = {
  variant: {
    defaultValue: 'default',
    type: { name: 'enum', value: ['default', 'Mono1'], required: false },
  },
  isExternal: {
    defaultValue: false,
    description:
      'Behaves the same way as target="_blank", i.e. opens the page in a new tab',
    type: { name: 'boolean', required: false },
  },
  leftIcon: {
    defaultValue: '',
    type: { name: 'enum', value: Object.keys(icons), required: false },
  },
  rightIcon: {
    defaultValue: '',
    type: { name: 'enum', value: Object.keys(icons), required: false },
  },
};

Basic.args = {
  children: 'Example',
  href: 'https://www.networktocode.com/',
};

Basic.parameters = {
  controls: {
    include: [
      'children',
      'href',
      'variant',
      'isExternal',
      'leftIcon',
      'rightIcon',
    ],
  },
};
