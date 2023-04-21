import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const InfoIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <chakra.path
      d="M12 16L12 11M12 7.85714L12 7"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </Icon>
));

InfoIcon.displayName = 'InfoIcon';

export default InfoIcon;
