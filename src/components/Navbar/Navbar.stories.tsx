import type { Meta, StoryFn } from '@storybook/react';
import React, { forwardRef } from 'react';
import type { HTMLProps } from 'react';

import {
  AutomationIcon,
  DcimIcon,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  IpamIcon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NautobotLogoIcon,
  Navbar,
  NavbarCollapseButton,
  NavbarLogo,
  NavbarMenuButton,
  NavbarNotificationButton,
  NavbarSection,
  NavbarSections,
  negateCssVar,
  PlatformIcon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SearchIcon,
  SecurityIcon,
  Text,
} from '../..';
import type { NavbarProps } from '../..';

const Story: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Components/Navbar',
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

const Template: StoryFn<typeof Navbar> = (args: NavbarProps) => (
  <Navbar {...args}>
    <NavbarLogo as={MockedReactRouterLink} to="/">
      <NautobotLogoIcon />
    </NavbarLogo>

    <NavbarCollapseButton isCollapsed marginLeft={negateCssVar('sm')} />

    <NavbarSections>
      {[
        { children: 'Inventory', to: '/inventory', leftIcon: <DcimIcon /> },
        { children: 'Networks', to: '/networks', leftIcon: <IpamIcon /> },
        { children: 'Security', to: '/security', leftIcon: <SecurityIcon /> },
        // prettier-ignore
        { children: 'Automation', to: '/automation', isActive: true, leftIcon: <AutomationIcon />, },
        { children: 'Platform', to: '/platform', leftIcon: <PlatformIcon /> },
      ].map(({ to, ...rest }) => (
        <NavbarSection key={to} as={MockedReactRouterLink} to={to} {...rest} />
      ))}
    </NavbarSections>

    <InputGroup flex="1" size={args.size} variant="navbar">
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input placeholder="Search..." />
    </InputGroup>

    <Popover>
      <PopoverTrigger>
        <NavbarNotificationButton>3</NavbarNotificationButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text paddingX="md">Notifications</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>

    <Divider
      height={20}
      marginLeft={negateCssVar('sm')}
      orientation="vertical"
    />

    <Menu>
      <MenuButton as={NavbarMenuButton}>John Smith</MenuButton>
      <MenuList>
        {[
          { children: 'Profile', to: '/profile' },
          { children: 'Logout', color: 'red-1', to: '/logout' },
        ].map(({ to, ...rest }) => (
          <MenuItem key={to} as={MockedReactRouterLink} to={to} {...rest} />
        ))}
      </MenuList>
    </Menu>
  </Navbar>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  size: { type: { name: 'enum', required: false, value: ['md', 'lg'] } },
};

Basic.args = {
  size: 'lg',
};
