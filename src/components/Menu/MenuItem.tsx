import { forwardRef, MenuItem as ChakraMenuItem } from '@chakra-ui/react';
import type { MenuItemProps as ChakraMenuItemProps } from '@chakra-ui/react';
import React, { cloneElement } from 'react';

export interface MenuItemProps extends ChakraMenuItemProps {}

const MenuItem = forwardRef<MenuItemProps, 'button'>(
  ({ color, icon, sx, ...rest }, ref) => (
    <ChakraMenuItem
      ref={ref}
      iconSpacing="sm"
      sx={{
        '&:focus-visible, &:hover': {
          background: 'blue-10%',
          color: color ?? 'blue-1',
          svg: { color: icon?.props?.color ?? 'currentcolor' },
        },
        ...sx,
      }}
      {...(color ? { color } : undefined)}
      {...(icon
        ? {
            icon: cloneElement(icon, {
              color: 'gray-2',
              size: 'sm',
              ...icon.props,
            }),
          }
        : undefined)}
      {...rest}
    />
  )
);

export default MenuItem;
