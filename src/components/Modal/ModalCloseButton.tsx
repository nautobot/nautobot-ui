import {
  forwardRef,
  ModalCloseButton as ChakraModalCloseButton,
} from '@chakra-ui/react';
import type { ModalCloseButtonProps as ChakraModalCloseButtonProps } from '@chakra-ui/react';
import React from 'react';

import { CloseIcon } from '../..';
import type { IconProps } from '../..';

export interface ModalCloseButtonProps
  extends Omit<ChakraModalCloseButtonProps, 'children'> {
  iconProps?: IconProps;
}

const ModalCloseButton = forwardRef<ModalCloseButtonProps, 'button'>(
  ({ iconProps, ...rest }, ref) => (
    <ChakraModalCloseButton ref={ref} {...rest}>
      <CloseIcon {...iconProps} />
    </ChakraModalCloseButton>
  )
);

ModalCloseButton.displayName = 'ModalCloseButton';

export default ModalCloseButton;
