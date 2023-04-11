import { forwardRef } from '@chakra-ui/react';
import type { SystemProps } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { Link } from '../..';
import type { LinkProps } from '../..';

import NavbarContext from './NavbarContext';

export interface NavbarLogoProps extends LinkProps {}

const NavbarLogo = forwardRef<NavbarLogoProps, 'a'>((props, ref) => {
  const {
    styles: { logo },
  } = useContext(NavbarContext);

  return <Link ref={ref} {...(logo as SystemProps)} {...props} />;
});

NavbarLogo.displayName = 'NavbarLogo';

export default NavbarLogo;
