import { Link as ChakraLink } from '@chakra-ui/react';
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import React, { cloneElement } from 'react';
import type { ReactElement } from 'react';

export interface LinkProps extends ChakraLinkProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Link = ({ children, leftIcon, rightIcon, ...rest }: LinkProps) => (
  <ChakraLink {...rest}>
    {leftIcon
      ? cloneElement(leftIcon, {
          size: 'sm',
          ...(children || rightIcon ? { marginRight: 'xs' } : undefined),
        })
      : null}

    {children}

    {rightIcon
      ? cloneElement(rightIcon, {
          size: 'sm',
          ...(children ? { marginLeft: 'xs' } : undefined),
        })
      : null}
  </ChakraLink>
);

export default Link;
