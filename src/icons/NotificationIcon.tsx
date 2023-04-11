import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const NotificationIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M4.8233 7.88348C5.5075 4.46249 8.51126 2 12 2V2C15.4887 2 18.4925 4.46249 19.1767 7.88348L20.4305 14.1525C20.7634 15.817 19.8791 17.4982 18.3278 18.1876V18.1876C14.3272 19.9657 9.67282 19.9657 5.67217 18.1876V18.1876C4.12092 17.4982 3.23659 15.817 3.56951 14.1525L4.8233 7.88348Z"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <chakra.path
      d="M8 19L8.2503 19.5632C8.90889 21.045 10.3784 22 12 22V22V22C13.6216 22 15.0911 21.045 15.7497 19.5632L16 19"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
));

NotificationIcon.displayName = 'NotificationIcon';

export default NotificationIcon;
