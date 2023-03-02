import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const SecurityIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 8.62361C3 7.34294 3 6.70261 3.24624 6.03367C3.43674 5.51613 3.87552 4.85774 4.27986 4.48271C4.80249 3.99797 5.2835 3.79737 6.24553 3.39617C7.95724 2.68233 10.0923 2 12 2C13.9077 2 16.0428 2.68233 17.7545 3.39617C18.7165 3.79737 19.1975 3.99797 19.7201 4.48271C20.1245 4.85774 20.5633 5.51613 20.7538 6.03367C21 6.70261 21 7.34294 21 8.62361V10.6972C21 13.0033 21 14.1564 20.6064 15.3643C20.3032 16.295 19.5913 17.5242 18.9349 18.2504C18.083 19.1929 17.3133 19.6344 15.774 20.5175C14.3241 21.3494 12.9018 22 12 22C11.0982 22 9.6759 21.3494 8.22597 20.5175C6.68666 19.6344 5.91701 19.1929 5.06511 18.2504C4.40874 17.5242 3.69682 16.295 3.39358 15.3643C3 14.1564 3 13.0033 3 10.6972V8.62361Z"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M9 12L11 14L15.5 9.5"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);

export default SecurityIcon;
