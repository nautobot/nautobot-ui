import { chakra, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import React from 'react';

import { NavbarContextProvider } from './NavbarContext';

export interface NavbarProps
  extends HTMLChakraProps<'header'>,
    ThemingProps<'Navbar'> {}

const Navbar = forwardRef<NavbarProps, 'header'>(
  ({ colorScheme, orientation, size, styleConfig, variant, ...rest }, ref) => {
    const styles = useMultiStyleConfig('Navbar', {
      colorScheme,
      orientation,
      size,
      styleConfig,
      variant,
    });

    const { container } = styles;

    return (
      <NavbarContextProvider styles={styles}>
        <chakra.header ref={ref} __css={container} {...rest} />
      </NavbarContextProvider>
    );
  }
);

Navbar.displayName = 'Navbar';

export default Navbar;
