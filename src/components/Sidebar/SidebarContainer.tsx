import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

import { useSidebarContext } from './';

export interface SidebarContainerProps extends BoxProps {}

const SidebarContainer = (props: SidebarContainerProps) => {
  const {
    style: { container },
  } = useSidebarContext();

  return <Box __css={container} role="navigation" {...props} />;
};

export default SidebarContainer;
