import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const MinusIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M7.00007 11.9999H16.9999"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
));

MinusIcon.displayName = 'MinusIcon';

export default MinusIcon;
