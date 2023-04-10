import { forwardRef } from '@chakra-ui/react';
import type { SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { ArrowLeftIcon, Button } from '../..';
import type { ButtonProps } from '../..';

import NavbarContext from './NavbarContext';

export interface NavbarCollapseButtonProps extends ButtonProps {
  isCollapsed: boolean;
}

const NavbarCollapseButton = forwardRef<NavbarCollapseButtonProps, 'button'>(
  ({ isCollapsed, ...rest }, ref) => {
    const {
      styles: { collapseButton },
    } = useContext(NavbarContext);

    return (
      <Button
        ref={ref}
        aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        leftIcon={
          <ArrowLeftIcon
            size="xs"
            {...(isCollapsed ? { variant: 'rotate-180' } : undefined)}
          />
        }
        type="button"
        variant="primaryAction"
        {...(collapseButton as SystemProps)}
        {...rest}
      />
    );
  }
);

NavbarCollapseButton.displayName = 'NavbarCollapseButton';

export default NavbarCollapseButton;
