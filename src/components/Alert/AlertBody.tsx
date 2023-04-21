import { forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Box } from '../..';
import type { BoxProps } from '../..';

export interface AlertBodyProps extends BoxProps {
  hasCloseButton?: boolean;
}

const AlertBody = forwardRef<AlertBodyProps, 'div'>(
  ({ hasCloseButton, ...rest }, ref) => (
    <Box
      ref={ref}
      flex="1"
      paddingLeft="sm"
      paddingRight={hasCloseButton ? 'lg' : 'sm'}
      {...rest}
    />
  )
);

AlertBody.displayName = 'AlertBody';

export default AlertBody;
