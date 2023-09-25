import { useMultiStyleConfig } from '@chakra-ui/react';
import type { ThemingProps } from '@chakra-ui/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import SidebarCollapseButton from './SidebarCollapseButton';
import SidebarContainer from './SidebarContainer';
import SidebarContent from './SidebarContent';
import { SidebarContextProvider } from './SidebarContext';

export interface SidebarProps extends ThemingProps<'Sidebar'> {
  children?: ReactNode;
  initialIsCollapsed?: boolean;
  isCollapsible?: boolean;
  onIsCollapsedChange?: (isCollapsed: boolean) => void;
}

const Sidebar = ({
  children,
  colorScheme,
  initialIsCollapsed = false,
  isCollapsible = false,
  orientation,
  size,
  styleConfig,
  variant,
  onIsCollapsedChange,
}: SidebarProps) => {
  const isMountedRef = useRef(false);

  const [isCollapsed, setIsCollapsed] = useState(initialIsCollapsed);

  const style = useMultiStyleConfig('Sidebar', {
    colorScheme,
    orientation,
    size,
    styleConfig,
    variant: variant ?? (isCollapsed ? 'collapsed' : 'expanded'),
  });

  const sidebarContextValue = useMemo(
    () => ({ isCollapsed, isCollapsible, setIsCollapsed, style }),
    [isCollapsed, isCollapsible, setIsCollapsed, style]
  );

  useEffect(() => {
    if (isMountedRef.current) {
      onIsCollapsedChange?.(isCollapsed);
    }
  }, [isCollapsed]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  });

  return (
    <SidebarContextProvider value={sidebarContextValue}>
      <SidebarContainer>
        {isCollapsible ? <SidebarCollapseButton /> : null}
        <SidebarContent>{children}</SidebarContent>
      </SidebarContainer>
    </SidebarContextProvider>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
