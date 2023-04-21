import { CloseButton as ChakraCloseButton, forwardRef } from '@chakra-ui/react';
import type { CloseButtonProps as ChakraCloseButtonProps } from '@chakra-ui/react';
import React from 'react';

import { CloseIcon } from '../..';

export interface CloseButtonProps extends ChakraCloseButtonProps {}

const CloseButton = forwardRef<CloseButtonProps, 'button'>(
  ({ size, ...rest }, ref) => (
    <ChakraCloseButton ref={ref} size={size} {...rest}>
      <CloseIcon size={size} />
    </ChakraCloseButton>
  )
);

CloseButton.displayName = 'CloseButton';

export default CloseButton;
