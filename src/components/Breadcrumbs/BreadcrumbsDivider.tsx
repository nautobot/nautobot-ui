import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React from 'react';

export interface BreadcrumbsDividerProps extends BoxProps {}

const BreadcrumbsDivider = forwardRef<BreadcrumbsDividerProps, 'span'>(
  (props, ref) => (
    <Box ref={ref} as="span" {...props}>
      /
    </Box>
  )
);

BreadcrumbsDivider.displayName = 'BreadcrumbsDivider';

export default BreadcrumbsDivider;
