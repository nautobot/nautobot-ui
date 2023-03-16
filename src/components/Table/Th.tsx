import { forwardRef, Th as ChakraTh } from '@chakra-ui/react';
import type { TableColumnHeaderProps as ChakraTableColumnHeaderProps } from '@chakra-ui/react';
import React from 'react';

export interface TableColumnHeaderProps extends ChakraTableColumnHeaderProps {}

const Th = forwardRef<TableColumnHeaderProps, 'th'>((props, ref) => (
  <ChakraTh ref={ref} {...props} />
));

Th.displayName = 'Th';

export default Th;
