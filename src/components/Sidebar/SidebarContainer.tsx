import { Box, forwardRef } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

import { useSidebarContext } from './';

export interface SidebarContainerProps extends BoxProps {}

const SidebarContainer = forwardRef<SidebarContainerProps, 'div'>(
  (props, ref) => {
    const {
      style: { container },
    } = useSidebarContext();

    return <Box ref={ref} __css={container} role="navigation" {...props} />;
  }
);

SidebarContainer.displayName = 'SidebarContainer';

export default SidebarContainer;
