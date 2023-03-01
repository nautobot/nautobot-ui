import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const CheckIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12.4444L9.69231 16L18 8"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </Icon>
);

export default CheckIcon;
