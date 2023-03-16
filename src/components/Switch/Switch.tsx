import { cssVar, forwardRef, Switch as ChakraSwitch } from '@chakra-ui/react';
import type { SwitchProps as ChakraSwitchProps } from '@chakra-ui/react';
import React from 'react';

export interface SwitchProps extends ChakraSwitchProps {}

const $chakraColorsBlue1 = cssVar('chakra-colors-blue-1');

const Switch = forwardRef<SwitchProps, 'input'>((props, ref) => {
  const focusHoverBoxShadow = `0 0 0 1px ${$chakraColorsBlue1.reference} inset`;

  return (
    <ChakraSwitch
      ref={ref}
      sx={{
        '&:has(input:disabled)': {
          '&::after, &::before': { color: 'gray-3' },
        },
        'input:disabled + :last-child': {
          '&::after, &::before': { color: 'gray-3' },
          '> :first-child': { background: 'gray-2' },
        },
        '&:hover > :last-child': { boxShadow: focusHoverBoxShadow },
        'input:focus-visible + :last-child': { boxShadow: focusHoverBoxShadow },
      }}
      {...props}
    />
  );
});

Switch.displayName = 'Switch';

export default Switch;
