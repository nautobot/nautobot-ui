import { useAccordionItemState, useAccordionStyles } from '@chakra-ui/react';
import type {
  AccordionIconProps as ChakraAccordionIconProps,
  ThemingProps,
} from '@chakra-ui/react';
import React from 'react';

import { ArrowDownIcon } from '../..';

import theme from './theme';

export interface AccordionIconProps extends ChakraAccordionIconProps {}

const AccordionIcon = (props: AccordionIconProps) => {
  const { isOpen } = useAccordionItemState();

  const {
    icon,
    icon: { color },
  } = useAccordionStyles();

  // Quack! 🦆
  const isVariantDefault = color === theme.baseStyle?.icon.color;

  return (
    <ArrowDownIcon
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
};

export default AccordionIcon;
