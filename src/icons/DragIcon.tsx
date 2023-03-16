import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const DragIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      clipRule="evenodd"
      d="M3 4.5C3 3.675 2.325 3 1.5 3C0.675 3 -2.95052e-08 3.675 -6.55671e-08 4.5C-1.01629e-07 5.325 0.675 6 1.5 6C2.325 6 3 5.325 3 4.5ZM3 19.5C3 18.675 2.325 18 1.5 18C0.674999 18 -6.85176e-07 18.675 -7.21238e-07 19.5C-7.573e-07 20.325 0.674999 21 1.5 21C2.325 21 3 20.325 3 19.5ZM1.5 10.5C2.325 10.5 3 11.175 3 12C3 12.825 2.325 13.5 1.5 13.5C0.674999 13.5 -4.29464e-07 12.825 -3.93402e-07 12C-3.57341e-07 11.175 0.675 10.5 1.5 10.5Z"
      fill="currentcolor"
      fillRule="evenodd"
    />
    <chakra.path
      clipRule="evenodd"
      d="M10.5 4.5C10.5 3.675 9.825 3 9 3C8.175 3 7.5 3.675 7.5 4.5C7.5 5.325 8.175 6 9 6C9.825 6 10.5 5.325 10.5 4.5ZM10.5 19.5C10.5 18.675 9.825 18 9 18C8.175 18 7.5 18.675 7.5 19.5C7.5 20.325 8.175 21 9 21C9.825 21 10.5 20.325 10.5 19.5ZM9 10.5C9.825 10.5 10.5 11.175 10.5 12C10.5 12.825 9.825 13.5 9 13.5C8.175 13.5 7.5 12.825 7.5 12C7.5 11.175 8.175 10.5 9 10.5Z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </Icon>
));

DragIcon.displayName = 'DragIcon';

export default DragIcon;
