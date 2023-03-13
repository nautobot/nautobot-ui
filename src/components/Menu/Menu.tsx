import { Menu as ChakraMenu } from '@chakra-ui/react';
import type { MenuProps as ChakraMenuProps } from '@chakra-ui/react';
import React from 'react';

export interface MenuProps extends ChakraMenuProps {}

/*
 * Set `isLazy` to `true` by default. For more details see a comment for the
 * `Popover` component: `src/components/Popover/Popover.tsx`.
 */
const Menu = (props: MenuProps) => <ChakraMenu isLazy {...props} />;

export default Menu;
