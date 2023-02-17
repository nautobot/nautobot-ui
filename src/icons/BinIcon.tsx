import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const BinIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 5L4.64564 15.9758C4.77037 18.0962 4.83273 19.1564 5.28528 19.961C5.68366 20.6692 6.28832 21.2394 7.01876 21.5955C7.84851 22 8.91054 22 11.0346 22H12.9654C15.0895 22 16.1515 22 16.9812 21.5955C17.7117 21.2394 18.3163 20.6692 18.7147 19.961C19.1673 19.1564 19.2296 18.0962 19.3544 15.9758L20 5M4 5H2M4 5H20M20 5H22"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M8 5L8.45298 3.64105C8.64969 3.05094 8.74804 2.75588 8.93047 2.53774C9.09156 2.3451 9.29844 2.19599 9.53213 2.10408C9.79677 2 10.1078 2 10.7298 2H13.2702C13.8922 2 14.2032 2 14.4679 2.10408C14.7016 2.19599 14.9084 2.3451 15.0695 2.53774C15.252 2.75588 15.3503 3.05094 15.547 3.64105L16 5"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default BinIcon;
