import { forwardRef, Link as ChakraLink } from '@chakra-ui/react';
import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import React, { cloneElement } from 'react';
import type { ReactElement } from 'react';

export interface LinkProps extends ChakraLinkProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Link = forwardRef<LinkProps, 'a'>(
  ({ children, leftIcon, rightIcon, ...rest }, ref) => (
    <ChakraLink ref={ref} {...rest}>
      {leftIcon
        ? cloneElement(leftIcon, {
            size: 'sm',
            ...(children || rightIcon ? { marginRight: 'xs' } : undefined),
            ...leftIcon.props,
          })
        : null}

      {children}

      {rightIcon
        ? cloneElement(rightIcon, {
            size: 'sm',
            ...(children ? { marginLeft: 'xs' } : undefined),
            ...rightIcon.props,
          })
        : null}
    </ChakraLink>
  )
);

Link.displayName = 'Link';

export default Link;
