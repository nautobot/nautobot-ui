import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const PlayIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.0828 11.7821C19.2528 11.8777 19.2527 12.1223 19.0828 12.2179L6.12257 19.508C5.95591 19.6018 5.75 19.4814 5.75 19.2902L5.75 4.70985C5.75 4.51864 5.95592 4.39821 6.12257 4.49195L19.0828 11.7821Z"
      stroke="currentcolor"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default PlayIcon;
