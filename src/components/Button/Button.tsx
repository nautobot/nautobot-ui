import { Button as ChakraButton, forwardRef } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import React from 'react';

export interface ButtonProps extends ChakraButtonProps {}

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => (
  <ChakraButton ref={ref} iconSpacing="xs" {...props} />
));

export default Button;
