import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const CloseIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M6 18L18 6M6 6L18 18"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
));

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;
