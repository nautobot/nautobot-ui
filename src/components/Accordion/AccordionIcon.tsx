import {
  forwardRef,
  useAccordionItemState,
  useAccordionStyles,
} from '@chakra-ui/react';
import type {
  AccordionIconProps as ChakraAccordionIconProps,
  ThemingProps,
} from '@chakra-ui/react';
import React from 'react';

import { ArrowDownIcon } from '../..';

import theme from './theme';

export interface AccordionIconProps extends ChakraAccordionIconProps {}

const AccordionIcon = forwardRef<AccordionIconProps, 'svg'>((props, ref) => {
  const { isOpen } = useAccordionItemState();

  const {
    icon,
    icon: { color },
  } = useAccordionStyles();

  // Quack! 🦆
  const isVariantDefault = color === theme.baseStyle?.icon.color;

  return (
    <ArrowDownIcon
      ref={ref}
      marginLeft="auto"
      {...(icon as ThemingProps<'Icon'>)}
      {...(isOpen
        ? {
            color: isVariantDefault ? 'blue-1' : 'orange-0',
            variant: 'rotate-180',
          }
        : undefined)}
      {...(!isVariantDefault ? { size: 'lg' } : undefined)}
      {...props}
    />
  );
});

AccordionIcon.displayName = 'AccordionIcon';

export default AccordionIcon;
