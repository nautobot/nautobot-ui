import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const EditIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.0001 3.99998L6.37023 13.6298C5.86092 14.1391 5.60627 14.3937 5.40392 14.6839C5.22432 14.9414 5.07566 15.2192 4.96101 15.5114C4.83185 15.8407 4.76122 16.1939 4.61997 16.9002L4 20L7.09986 19.38C7.80613 19.2388 8.15927 19.1681 8.48856 19.039C8.78084 18.9243 9.05861 18.7757 9.31613 18.5961C9.60626 18.3937 9.86091 18.1391 10.3702 17.6298L10.3702 17.6298L20.0001 7.99994C20.5453 7.45472 20.8179 7.18212 20.9636 6.88804C21.2409 6.32848 21.2409 5.67151 20.9636 5.11194C20.8179 4.81786 20.5453 4.54525 20.0001 4.00003C19.4549 3.45479 19.1823 3.18217 18.8882 3.03643C18.3286 2.75912 17.6716 2.75911 17.1121 3.03641C16.818 3.18215 16.5454 3.45476 16.0001 3.99998Z"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M15 5V5C15 7.20914 16.7909 9 19 9V9"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default EditIcon;
