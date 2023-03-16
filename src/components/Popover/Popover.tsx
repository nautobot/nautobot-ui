import { Popover as ChakraPopover } from '@chakra-ui/react';
import type { PopoverProps as ChakraPopoverProps } from '@chakra-ui/react';
import React from 'react';

export interface PopoverProps extends ChakraPopoverProps {}

/*
 * Chakra UI `Popover` component has a bug with its initial position. Position
 * is incorrect on the first render and popover content overflows the page,
 * because it remains clickable, even when closed and with `visibility: hidden`.
 * Setting `isLazy` is a workaround to render the `Popover` content only when
 * it's open, so it does not any get accidental clicks.
 * More info at: https://github.com/chakra-ui/chakra-ui/issues/5398
 */
const Popover = (props: PopoverProps) => <ChakraPopover isLazy {...props} />;

Popover.displayName = 'Popover';

export default Popover;
