import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const CheckIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M6 12.4444L9.69231 16L18 8"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </Icon>
));

CheckIcon.displayName = 'CheckIcon';

export default CheckIcon;
