import {
  forwardRef,
  MenuItemOption as ChakraMenuItemOption,
} from '@chakra-ui/react';
import type { MenuItemOptionProps as ChakraMenuItemOptionProps } from '@chakra-ui/react';
import React, { cloneElement } from 'react';
import type { ReactElement } from 'react';

import { CheckboxIcon, Flex } from '../..';
import checkboxTheme from '../Checkbox/theme';

export interface MenuItemOptionProps extends ChakraMenuItemOptionProps {
  iconChecked?: ReactElement;
}

const MenuItemOption = forwardRef<MenuItemOptionProps, 'button'>(
  (
    {
      children,
      color,
      icon: iconProp,
      iconChecked,
      iconSpacing,
      isChecked,
      sx,
      ...rest
    },
    ref
  ) => {
    const icon = iconChecked && isChecked ? iconChecked : iconProp;

    return (
      <ChakraMenuItemOption
        ref={ref}
        /*
         * Basic Chakra UI `MenuItemOption` `icon` is very limited in terms of
         * style and customization, so move `icon` to `children` instead.
         */
        icon={null}
        isChecked={isChecked}
        sx={{
          '&:focus-visible, &:hover': {
            background: 'blue-10%',
            color: color ?? 'blue-1',
            svg: { color: icon?.props?.color ?? 'currentcolor' },
            ...(icon
              ? undefined
              : {
                  '> span > span:first-child::before': {
                    borderColor: 'currentcolor',
                  },
                }),
          },
          '> span': { display: 'inline-flex', alignItems: 'center' },
          ...sx,
        }}
        {...(color ? { color } : undefined)}
        {...(isChecked ? { color: 'blue-1' } : undefined)}
        {...rest}
      >
        {icon ? (
          cloneElement(icon, {
            color: isChecked ? 'currentcolor' : 'gray-2',
            marginRight: iconSpacing ?? 'sm',
            size: 'sm',
            ...icon.props,
          })
        ) : (
          <Flex
            {...checkboxTheme.sizes?.sm.control}
            _before={{
              ...checkboxTheme.baseStyle?.control._before,
              borderColor: isChecked ? 'currentcolor' : 'gray-2',
            }}
            as="span"
            display="inline-flex"
            marginRight="sm"
            position="relative"
          >
            <CheckboxIcon isChecked={isChecked} />
          </Flex>
        )}
        {children}
      </ChakraMenuItemOption>
    );
  }
);

MenuItemOption.displayName = 'MenuItemOption';

MenuItemOption.id = 'MenuItemOption';

export default MenuItemOption;
