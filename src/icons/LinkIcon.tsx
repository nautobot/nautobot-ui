import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const LinkIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.2893 18.7484L11.5786 19.4816C9.61616 21.5061 6.43435 21.5061 4.47186 19.4816C2.50938 17.457 2.50938 14.1745 4.47186 12.1499L6.16656 10.4016C7.97808 8.53279 10.9151 8.53279 12.7267 10.4016L13 10.6836"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M11.7107 5.25159L12.4214 4.51843C14.3838 2.49386 17.5657 2.49386 19.5281 4.51843C21.4906 6.543 21.4906 9.82549 19.5281 11.8501L17.8334 13.5984C16.0219 15.4672 13.0849 15.4672 11.2733 13.5984L11 13.3164"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default LinkIcon;
