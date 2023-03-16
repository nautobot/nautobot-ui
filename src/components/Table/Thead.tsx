import { forwardRef, Thead as ChakraThead } from '@chakra-ui/react';
import type { TableHeadProps as ChakraTableHeadProps } from '@chakra-ui/react';
import React from 'react';

export interface TableHeadProps extends ChakraTableHeadProps {}

const Thead = forwardRef<TableHeadProps, 'thead'>((props, ref) => (
  <ChakraThead ref={ref} {...props} />
));

Thead.displayName = 'Thead';

export default Thead;
