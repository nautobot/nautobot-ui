import { ModalContent as ChakraModalContent } from '@chakra-ui/react';
import type { ModalContentProps as ChakraModalContentProps } from '@chakra-ui/react';
import React from 'react';

import { Frame } from '../..';

export interface ModalContentProps extends ChakraModalContentProps {}

const ModalContent = ({ children, ...rest }: ModalContentProps) => (
  <ChakraModalContent {...rest}>
    <Frame variant="modal">{children}</Frame>
  </ChakraModalContent>
);

export default ModalContent;
