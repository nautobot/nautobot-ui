import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const ArrowDownIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M6 9L9.73726 12.7373C10.5293 13.5293 10.9253 13.9253 11.382 14.0737C11.7837 14.2042 12.2163 14.2042 12.618 14.0737C13.0747 13.9253 13.4707 13.5293 14.2627 12.7373L18 9"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
));

ArrowDownIcon.displayName = 'ArrowDownIcon';

export default ArrowDownIcon;
