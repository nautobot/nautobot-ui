import { TableContainer as ChakraTableContainer } from '@chakra-ui/react';
import type { TableContainerProps as ChakraTableContainerProps } from '@chakra-ui/react';
import React from 'react';

export interface TableContainerProps extends ChakraTableContainerProps {}

const TableContainer = (props: TableContainerProps) => (
  <ChakraTableContainer
    borderColor="gray-1"
    borderRadius="md"
    borderStyle="solid"
    borderWidth={1}
    overflow="hidden"
    width="full"
    {...props}
  />
);

export default TableContainer;
