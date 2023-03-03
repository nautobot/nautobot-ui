import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

import { useSidebarContext } from './';

export interface SidebarContentProps extends BoxProps {}

const SidebarContent = (props: SidebarContentProps) => {
  const {
    style: { content },
  } = useSidebarContext();

  return <Box __css={content} {...props} />;
};

export default SidebarContent;
