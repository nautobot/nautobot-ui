import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';

import { Breadcrumb, Breadcrumbs, Text, Tooltip } from '../..';
import type { BreadcrumbsProps } from '../..';

const Story: ComponentMeta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
};

export default Story;

const MockedReactRouterLink = forwardRef<
  HTMLAnchorElement,
  HTMLProps<HTMLAnchorElement> & { to: string }
>(({ children, to, ...rest }) => (
  <a href={to} {...rest} onClick={(event) => event.preventDefault()}>
    {children}
  </a>
));

MockedReactRouterLink.displayName = 'ReactRouterLink';

const Template: ComponentStory<typeof Breadcrumbs> = ({
  ...args
}: BreadcrumbsProps) => (
  <Breadcrumbs {...args}>
    <Breadcrumb type="custom">
      <Tooltip
        label={'This is an example of <Breadcrumb type="custom"> component.'}
        width={180}
      >
        <Text>Level 1 [type=&quot;custom&quot;]</Text>
      </Tooltip>
    </Breadcrumb>

    <Breadcrumb as={MockedReactRouterLink} to="/2" type="link">
      Level 2 [type=&quot;link&quot;]
    </Breadcrumb>

    <Breadcrumb
      items={[
        { as: MockedReactRouterLink, children: 'Option 1', to: '/2/1' },
        { as: MockedReactRouterLink, children: 'Option 2', to: '/2/2' },
      ]}
      type="menu"
    >
      Level 3 [type=&quot;menu&quot;]
    </Breadcrumb>

    <Breadcrumb type="text">
      Active Level 4 Breadcrumb [type=&quot;text&quot;]
    </Breadcrumb>
  </Breadcrumbs>
);

export const Basic = Template.bind({});
