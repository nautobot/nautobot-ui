import type { SystemStyleObject } from '@chakra-ui/react';
import React, { createContext, useMemo } from 'react';
import type { ReactNode } from 'react';

export interface NavbarContextValue {
  styles: Record<
    | 'collapseButton'
    | 'container'
    | 'logo'
    | 'menuButton'
    | 'notificationButton'
    | 'section'
    | 'sections',
    SystemStyleObject
  >;
}

const NavbarContext = createContext<NavbarContextValue>({
  styles: {
    collapseButton: {},
    container: {},
    logo: {},
    menuButton: {},
    notificationButton: {},
    section: {},
    sections: {},
  },
});

NavbarContext.displayName = 'NavbarContext';

export const { Consumer: NavbarContextConsumer } = NavbarContext;

export interface NavbarContextProviderProps
  extends Pick<NavbarContextValue, 'styles'> {
  children: ReactNode;
}

export const NavbarContextProvider = ({
  children,
  styles,
}: NavbarContextProviderProps) => {
  const value = useMemo(() => ({ styles }), [styles]);

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

NavbarContextProvider.displayName = 'NavbarContextProvider';

export default NavbarContext;
