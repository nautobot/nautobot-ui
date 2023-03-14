import { Button as ChakraButton, forwardRef } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import React, { cloneElement } from 'react';

export interface ButtonProps extends ChakraButtonProps {}

const Button = forwardRef<ButtonProps, 'button'>(
  ({ children, leftIcon, rightIcon, ...rest }, ref) => (
    <ChakraButton
      ref={ref}
      iconSpacing={children ? 'xs' : 0}
      {...(leftIcon
        ? {
            leftIcon: leftIcon.props?.size
              ? leftIcon
              : cloneElement(leftIcon, { size: 'sm' }),
          }
        : undefined)}
      {...(rightIcon
        ? {
            rightIcon: rightIcon.props?.size
              ? rightIcon
              : cloneElement(rightIcon, { size: 'sm' }),
          }
        : undefined)}
      {...rest}
    >
      {children}
    </ChakraButton>
  )
);

export default Button;
