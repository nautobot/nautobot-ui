import { forwardRef, Tr as ChakraTr } from '@chakra-ui/react';
import type { TableRowProps as ChakraTableRowProps } from '@chakra-ui/react';
import React from 'react';

export interface TableRowProps extends ChakraTableRowProps {}

const Tr = forwardRef<TableRowProps, 'th'>((props, ref) => (
  <ChakraTr ref={ref} {...props} />
));

Tr.displayName = 'Tr';

export default Tr;
