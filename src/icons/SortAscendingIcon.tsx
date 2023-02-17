import React from 'react';

import { chakra, Icon } from '..';
import type { IconProps } from '..';

const SortAscendingIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      d="M9 9L9.73726 8.26274C10.5293 7.47071 10.9253 7.07469 11.382 6.92631C11.7837 6.7958 12.2163 6.7958 12.618 6.92631C13.0747 7.07469 13.4707 7.47071 14.2627 8.26274L15 9"
      stroke="blue-1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <chakra.path
      d="M15 15L14.2627 15.7373C13.4707 16.5293 13.0747 16.9253 12.618 17.0737C12.2163 17.2042 11.7837 17.2042 11.382 17.0737C10.9253 16.9253 10.5293 16.5293 9.73726 15.7373L9 15"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default SortAscendingIcon;
