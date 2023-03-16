import {
  calc,
  cssVar,
  forwardRef,
  Tbody as ChakraTbody,
} from '@chakra-ui/react';
import type { TableBodyProps as ChakraTableBodyProps } from '@chakra-ui/react';
import React from 'react';

export interface TableBodyProps extends ChakraTableBodyProps {}

const $chakraSpaceSm = cssVar('chakra-space-sm');

const Tbody = forwardRef<TableBodyProps, 'tbody'>(({ sx, ...rest }, ref) => (
  <ChakraTbody
    ref={ref}
    sx={{
      '&:first-child': {
        borderTop: 'none',
        '> tr:first-child > td': {
          paddingTop: calc.subtract($chakraSpaceSm, '1px'),
        },
      },
      ...sx,
    }}
    {...rest}
  />
));

Tbody.displayName = 'Tbody';

export default Tbody;
