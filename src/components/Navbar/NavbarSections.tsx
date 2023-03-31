import { chakra, forwardRef } from '@chakra-ui/react';
import type { HTMLChakraProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import type { ReactElement } from 'react';

import NavbarContext from './NavbarContext';
import NavbarSection, { NavbarSectionProps } from './NavbarSection';

type ReactElementNavbarSection = ReactElement<
  NavbarSectionProps,
  typeof NavbarSection
>;

export interface NavbarSectionsProps
  extends Omit<HTMLChakraProps<'nav'>, 'children'> {
  children: ReactElementNavbarSection | ReactElementNavbarSection[];
}

const NavbarSections = forwardRef<NavbarSectionsProps, 'nav'>(
  ({ children, ...rest }, ref) => {
    const {
      styles: { sections },
    } = useContext(NavbarContext);

    return (
      <chakra.nav ref={ref} __css={sections} {...rest}>
        {children}
      </chakra.nav>
    );
  }
);

NavbarSections.displayName = 'NavbarSections';

export default NavbarSections;
