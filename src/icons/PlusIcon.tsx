import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const PlusIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.51472 12.0001H20.4853M12 3.51477V20.4853"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default PlusIcon;
