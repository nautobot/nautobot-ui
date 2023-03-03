import {
  AccordionButton as ChakraAccordionButton,
  useAccordionItemState,
  useAccordionStyles,
} from '@chakra-ui/react';
import type { AccordionButtonProps as ChakraAccordionButtonProps } from '@chakra-ui/react';
import React from 'react';

import { NtcThumbnailIcon, TreeEdge } from '../..';

import theme from './theme';

export interface AccordionButtonProps extends ChakraAccordionButtonProps {
  isFirst?: boolean;
  isLast?: boolean;
}

const AccordionButton = ({
  children,
  isFirst,
  isLast,
  ...rest
}: AccordionButtonProps) => {
  const { isOpen } = useAccordionItemState();

  const {
    button: { background },
  } = useAccordionStyles();

  // Quack! 🦆
  const isVariantDefault = background === theme.baseStyle?.button.background;
  const isVariantSidebarLevel0 =
    background === theme.variants?.sidebarLevel0.button.background;
  const isVariantSidebarLevel1 =
    background === theme.variants?.sidebarLevel1.button.background;

  return (
    <ChakraAccordionButton
      {...(isVariantDefault
        ? undefined
        : {
            sx: {
              '&:focus, &:hover': {
                'svg:last-child': { color: 'currentcolor' },
              },
            },
          })}
      {...(isOpen
        ? {
            ...(isVariantDefault
              ? { background: 'blue-10%', borderBottomRadius: 0 }
              : {
                  background: isVariantSidebarLevel0 ? 'navy-1' : 'navy-2',
                  color: 'orange-0',
                }),
          }
        : undefined)}
      {...rest}
    >
      {isVariantSidebarLevel0 ? <NtcThumbnailIcon /> : null}
      {isVariantSidebarLevel1 ? (
        <TreeEdge
          variant={`sidebar${isFirst ? 'First' : isLast ? 'Last' : ''}`}
        />
      ) : null}
      {children}
    </ChakraAccordionButton>
  );
};

export default AccordionButton;
