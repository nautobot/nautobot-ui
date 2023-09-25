import { calc, forwardRef, Tbody as ChakraTbody } from '@chakra-ui/react';
import type { TableBodyProps as ChakraTableBodyProps } from '@chakra-ui/react';
import React from 'react';

import { getCssVar } from '../../utils';

export interface TableBodyProps extends ChakraTableBodyProps {}

const Tbody = forwardRef<TableBodyProps, 'tbody'>(({ sx, ...rest }, ref) => (
  <ChakraTbody
    ref={ref}
    sx={{
      ':not(thead + &)': {
        borderTop: 'none',
        '> tr:first-of-type > td': {
          paddingTop: calc.subtract(getCssVar('space.sm'), '1px'),
        },
      },
      ...sx,
    }}
    {...rest}
  />
));

Tbody.displayName = 'Tbody';

export default Tbody;
