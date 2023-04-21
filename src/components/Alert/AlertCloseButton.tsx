import { forwardRef } from '@chakra-ui/react';
import React from 'react';

import { CloseButton } from '../..';
import type { CloseButtonProps } from '../..';

export interface AlertCloseButtonProps extends CloseButtonProps {}

const AlertCloseButton = forwardRef<AlertCloseButtonProps, 'button'>(
  (props, ref) => (
    <CloseButton
      ref={ref}
      position="absolute"
      right="sm"
      size="sm"
      {...props}
    />
  )
);

AlertCloseButton.displayName = 'AlertCloseButton';

export default AlertCloseButton;
