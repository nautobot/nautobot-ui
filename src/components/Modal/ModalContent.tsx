import {
  forwardRef,
  ModalContent as ChakraModalContent,
} from '@chakra-ui/react';
import type { ModalContentProps as ChakraModalContentProps } from '@chakra-ui/react';
import React from 'react';

import { Frame } from '../..';

export interface ModalContentProps extends ChakraModalContentProps {}

const ModalContent = forwardRef<ModalContentProps, 'section'>(
  ({ children, ...rest }, ref) => (
    <ChakraModalContent ref={ref} {...rest}>
      <Frame variant="modal">{children}</Frame>
    </ChakraModalContent>
  )
);

ModalContent.displayName = 'ModalContent';

export default ModalContent;
