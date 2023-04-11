import { forwardRef } from '@chakra-ui/react';
import type { StyleProps } from '@chakra-ui/react';
import React, { cloneElement, useContext } from 'react';

import { Link } from '../..';
import type { LinkProps } from '../..';

import NavbarContext from './NavbarContext';

export interface NavbarSectionProps extends LinkProps {
  isActive?: boolean;
}

const NavbarSection = forwardRef<NavbarSectionProps, 'a'>(
  (
    {
      children,
      leftIcon: leftIconProp,
      rightIcon: rightIconProp,
      isActive,
      ...rest
    },
    ref
  ) => {
    const {
      styles: { section },
    } = useContext(NavbarContext);

    const leftIcon = leftIconProp
      ? cloneElement(leftIconProp, {
          size: 'md',
          ...(children || rightIconProp ? { marginRight: 'sm' } : undefined),
          ...leftIconProp.props,
        })
      : leftIconProp;

    const rightIcon = rightIconProp
      ? cloneElement(rightIconProp, {
          size: 'md',
          ...(children || leftIconProp ? { marginLeft: 'sm' } : undefined),
          ...rightIconProp.props,
        })
      : rightIconProp;

    return (
      <Link
        ref={ref}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        {...(section as StyleProps)}
        {...(isActive ? { color: 'blue-1' } : undefined)}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);

NavbarSection.displayName = 'NavbarSection';

export default NavbarSection;
