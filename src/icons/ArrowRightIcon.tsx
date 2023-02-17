import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const ArrowRightIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 18L12.7373 14.2627C13.5293 13.4707 13.9253 13.0747 14.0737 12.618C14.2042 12.2163 14.2042 11.7837 14.0737 11.382C13.9253 10.9253 13.5293 10.5293 12.7373 9.73726L9 6"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default ArrowRightIcon;
