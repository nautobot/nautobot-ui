import { chakra, forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const DcimIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon
    ref={ref}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <chakra.path
      clipRule="evenodd"
      d="M3.75 5C3.75 4.91409 3.80155 4.71287 4.17149 4.42132C4.53298 4.13644 5.10255 3.84708 5.87321 3.59019C7.4067 3.07903 9.5729 2.75 12 2.75C14.4271 2.75 16.5933 3.07903 18.1268 3.59019C18.8975 3.84708 19.467 4.13644 19.8285 4.42132C20.1985 4.71287 20.25 4.91409 20.25 5C20.25 5.08591 20.1985 5.28713 19.8285 5.57868C19.467 5.86356 18.8975 6.15292 18.1268 6.40981C16.5933 6.92097 14.4271 7.25 12 7.25C9.5729 7.25 7.4067 6.92097 5.87321 6.40981C5.10255 6.15292 4.53298 5.86356 4.17149 5.57868C3.80155 5.28713 3.75 5.08591 3.75 5ZM20.25 7.10311C19.7794 7.38436 19.2186 7.627 18.6011 7.83283C16.8773 8.40746 14.5435 8.75 12 8.75C9.45654 8.75 7.12274 8.40746 5.39887 7.83283C4.78138 7.627 4.22063 7.38436 3.75 7.10311L3.75 12L3.75 12.0004C3.75014 12.0865 3.80206 12.2875 4.17149 12.5787C4.53298 12.8636 5.10255 13.1529 5.87321 13.4098C7.4067 13.921 9.5729 14.25 12 14.25C14.4271 14.25 16.5933 13.921 18.1268 13.4098C18.8975 13.1529 19.467 12.8636 19.8285 12.5787C20.1985 12.2871 20.25 12.0859 20.25 12V7.10311ZM21.75 12V5C21.75 4.25749 21.2979 3.66949 20.757 3.24321C20.2076 2.81026 19.4591 2.45317 18.6011 2.16717C16.8773 1.59254 14.5435 1.25 12 1.25C9.45654 1.25 7.12274 1.59254 5.39887 2.16717C4.54085 2.45317 3.79239 2.81026 3.24303 3.24321C2.70213 3.66949 2.25 4.25749 2.25 5V12V19C2.25 19.7425 2.70213 20.3305 3.24303 20.7568C3.79239 21.1897 4.54085 21.5468 5.39887 21.8328C7.12274 22.4075 9.45654 22.75 12 22.75C14.5435 22.75 16.8773 22.4075 18.6011 21.8328C19.4591 21.5468 20.2076 21.1897 20.757 20.7568C21.2979 20.3305 21.75 19.7425 21.75 19V12ZM20.25 14.1031C19.7794 14.3844 19.2186 14.627 18.6011 14.8328C16.8773 15.4075 14.5435 15.75 12 15.75C9.45654 15.75 7.12274 15.4075 5.39887 14.8328C4.78138 14.627 4.22063 14.3844 3.75 14.1031L3.75 19C3.75 19.0859 3.80155 19.2871 4.17149 19.5787C4.53298 19.8636 5.10255 20.1529 5.87321 20.4098C7.4067 20.921 9.5729 21.25 12 21.25C14.4271 21.25 16.5933 20.921 18.1268 20.4098C18.8975 20.1529 19.467 19.8636 19.8285 19.5787C20.1985 19.2871 20.25 19.0859 20.25 19V14.1031Z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </Icon>
));

DcimIcon.displayName = 'DcimIcon';

export default DcimIcon;
