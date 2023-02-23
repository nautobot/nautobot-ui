import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const HomeIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 14V11.845C22 10.433 22 9.72701 21.8204 9.07517C21.6613 8.49771 21.3998 7.95353 21.0483 7.46857C20.6514 6.92115 20.1001 6.48011 18.9976 5.59805L16.9976 3.99805C15.214 2.57118 14.3222 1.85774 13.3332 1.58413C12.4608 1.34279 11.5392 1.34279 10.6668 1.58413C9.67783 1.85774 8.78603 2.57118 7.00244 3.99805L5.00244 5.59805C3.89986 6.48011 3.34857 6.92115 2.95174 7.46857C2.6002 7.95353 2.33865 8.49771 2.17957 9.07517C2 9.72701 2 10.433 2 11.845V14C2 16.8003 2 18.2004 2.54497 19.27C3.02433 20.2108 3.78924 20.9757 4.73005 21.455C5.79961 22 7.19974 22 10 22H14C16.8003 22 18.2004 22 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C22 18.2004 22 16.8003 22 14Z"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M9 16H15"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default HomeIcon;
