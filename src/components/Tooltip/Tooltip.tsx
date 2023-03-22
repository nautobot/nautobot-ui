import { forwardRef, Tooltip as ChakraTooltip } from '@chakra-ui/react';
import type { TooltipProps as ChakraTooltipProps } from '@chakra-ui/react';
import React from 'react';

export interface TooltipProps extends ChakraTooltipProps {}

const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => (
  <ChakraTooltip ref={ref} hasArrow {...props} />
));

Tooltip.displayName = 'Tooltip';

export default Tooltip;
