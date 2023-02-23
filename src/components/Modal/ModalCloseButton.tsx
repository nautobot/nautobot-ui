import { ModalCloseButton as ChakraModalCloseButton } from '@chakra-ui/react';
import type { ModalCloseButtonProps as ChakraModalCloseButtonProps } from '@chakra-ui/react';
import React from 'react';

import { CloseIcon } from '../..';
import type { IconProps } from '../..';

export interface ModalCloseButtonProps extends ChakraModalCloseButtonProps {
  iconProps?: IconProps;
}

const ModalCloseButton = ({ iconProps, ...rest }: ModalCloseButtonProps) => (
  <ChakraModalCloseButton {...rest}>
    <CloseIcon {...iconProps} />
  </ChakraModalCloseButton>
);

export default ModalCloseButton;
