import { forwardRef } from '@chakra-ui/react';
import type { SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { ArrowDownIcon, Button, useMenuContext } from '../..';
import type { ButtonProps } from '../..';

import NavbarContext from './NavbarContext';

export interface NavbarMenuButtonProps extends ButtonProps {}

const NavbarMenuButton = forwardRef<NavbarMenuButtonProps, 'button'>(
  (props, ref) => {
    const {
      styles: { menuButton },
    } = useContext(NavbarContext);

    const { isOpen } = useMenuContext();

    return (
      <Button
        ref={ref}
        rightIcon={
          <ArrowDownIcon
            size="md"
            {...(isOpen ? { variant: 'rotate-180' } : undefined)}
          />
        }
        variant="unstyled"
        {...(menuButton as SystemProps)}
        {...props}
      />
    );
  }
);

NavbarMenuButton.displayName = 'NavbarMenuButton';

export default NavbarMenuButton;
