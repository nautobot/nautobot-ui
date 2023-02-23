import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const ArrowUpIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 15L9.73726 11.2627C10.5293 10.4707 10.9253 10.0747 11.382 9.92631C11.7837 9.7958 12.2163 9.7958 12.618 9.92631C13.0747 10.0747 13.4707 10.4707 14.2627 11.2627L18 15"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default ArrowUpIcon;
