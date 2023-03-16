import { forwardRef, Td as ChakraTd } from '@chakra-ui/react';
import type { TableCellProps as ChakraTableCellProps } from '@chakra-ui/react';
import React from 'react';

export interface TableCellProps extends ChakraTableCellProps {}

const Td = forwardRef<TableCellProps, 'td'>((props, ref) => (
  <ChakraTd ref={ref} {...props} />
));

Td.displayName = 'Td';

export default Td;
