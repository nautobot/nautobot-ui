import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const ArrowLeftIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M15 6L11.2627 9.73726C10.4707 10.5293 10.0747 10.9253 9.92631 11.382C9.7958 11.7837 9.7958 12.2163 9.92631 12.618C10.0747 13.0747 10.4707 13.4707 11.2627 14.2627L15 18"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
));

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export default ArrowLeftIcon;
