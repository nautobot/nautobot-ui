import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const SearchIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11Z"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <path
      d="M17.5 17.5L21 21"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default SearchIcon;
