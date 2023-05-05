import {
  forwardRef,
  TableContainer as ChakraTableContainer,
} from '@chakra-ui/react';
import type { TableContainerProps as ChakraTableContainerProps } from '@chakra-ui/react';
import React from 'react';

export interface TableContainerProps extends ChakraTableContainerProps {}

const TableContainer = forwardRef<TableContainerProps, 'div'>((props, ref) => (
  <ChakraTableContainer
    ref={ref}
    borderColor="gray-1"
    borderRadius="md"
    borderStyle="solid"
    borderWidth={1}
    overflow="auto"
    width="full"
    {...props}
  />
));

TableContainer.displayName = 'TableContainer';

export default TableContainer;
