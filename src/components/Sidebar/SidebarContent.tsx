import { Box, forwardRef } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

import { useSidebarContext } from './SidebarContext';

export interface SidebarContentProps extends BoxProps {}

const SidebarContent = forwardRef<SidebarContentProps, 'div'>((props, ref) => {
  const {
    style: { content },
  } = useSidebarContext();

  return <Box ref={ref} __css={content} {...props} />;
});

SidebarContent.displayName = 'SidebarContent';

export default SidebarContent;
