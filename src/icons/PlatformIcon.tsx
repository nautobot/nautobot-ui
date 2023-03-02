import React from 'react';

import { Icon } from '..';
import type { IconProps } from '..';

const PlatformIcon = (props: IconProps) => (
  <Icon
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M11.1243 0.803622C11.7032 0.695017 12.2972 0.695017 12.8761 0.803622C13.531 0.926497 14.1443 1.23332 15.0965 1.70968L15.1977 1.7603L18.6112 3.46705L18.6461 3.48448L18.6462 3.4845L18.6462 3.48452C19.5378 3.9303 20.2537 4.28827 20.7805 4.61456C21.3043 4.93908 21.7679 5.30528 22.0127 5.82159C22.3665 6.5674 22.3665 7.43266 22.0127 8.17848C21.7679 8.69478 21.3043 9.06099 20.7805 9.3855C20.2537 9.71179 19.5378 10.0698 18.6461 10.5156L18.6112 10.533L15.1977 12.2398L15.0965 12.2904C14.1443 12.7668 13.531 13.0736 12.8761 13.1964C12.2972 13.305 11.7032 13.305 11.1243 13.1964C10.4693 13.0736 9.85603 12.7668 8.9038 12.2904L8.90379 12.2904L8.80259 12.2398L5.38909 10.533L5.35415 10.5155C4.46256 10.0698 3.74659 9.71179 3.21986 9.3855C2.69598 9.06099 2.23247 8.69478 1.98759 8.17848C1.63387 7.43266 1.63387 6.5674 1.98759 5.82159C2.23247 5.30528 2.69598 4.93908 3.21986 4.61456C3.74659 4.28827 4.46256 3.9303 5.35415 3.48451L5.35417 3.48451L5.35418 3.4845L5.38909 3.46704L8.80259 1.76029L8.90378 1.70968C9.85602 1.23332 10.4693 0.926497 11.1243 0.803622ZM12.5995 2.2779C12.2034 2.20359 11.7969 2.20359 11.4009 2.2779C10.9779 2.35725 10.5617 2.55777 9.47341 3.10194L6.05991 4.80869C5.12532 5.27598 4.47129 5.60383 4.00977 5.88973C3.53853 6.18164 3.39363 6.35739 3.34289 6.46438C3.1821 6.80338 3.1821 7.19668 3.34289 7.53569C3.39363 7.64268 3.53853 7.81843 4.00977 8.11034C4.47129 8.39623 5.12532 8.72408 6.05991 9.19138L9.47341 10.8981C10.5617 11.4423 10.9779 11.6428 11.4009 11.7222C11.7969 11.7965 12.2034 11.7965 12.5995 11.7222C13.0224 11.6428 13.4386 11.4423 14.5269 10.8981L17.9404 9.19138C18.875 8.72409 19.529 8.39623 19.9906 8.11034C20.4618 7.81843 20.6067 7.64268 20.6574 7.53569C20.8182 7.19668 20.8182 6.80338 20.6574 6.46438C20.6067 6.35739 20.4618 6.18164 19.9906 5.88973C19.529 5.60383 18.875 5.27598 17.9404 4.80869L14.5269 3.10194C13.4386 2.55777 13.0224 2.35725 12.5995 2.2779ZM1.32934 12.6646C1.51459 12.2941 1.96509 12.144 2.33557 12.3292L8.04232 15.1826C9.65539 15.9891 10.3339 16.3208 11.0321 16.4518C11.6719 16.5718 12.3284 16.5718 12.9683 16.4518C13.6664 16.3208 14.3449 15.9891 15.958 15.1826L21.6648 12.3292C22.0352 12.144 22.4857 12.2941 22.671 12.6646C22.8562 13.0351 22.7061 13.4856 22.3356 13.6709L16.6288 16.5242L16.5173 16.58C15.0497 17.314 14.1746 17.7516 13.2448 17.9261C12.4222 18.0804 11.5781 18.0804 10.7555 17.9261C9.82575 17.7516 8.95065 17.314 7.48302 16.58L7.48301 16.58L7.3715 16.5242L1.66475 13.6709C1.29427 13.4856 1.1441 13.0351 1.32934 12.6646ZM2.33557 17.3292C1.96509 17.144 1.51459 17.2941 1.32934 17.6646C1.1441 18.0351 1.29427 18.4856 1.66475 18.6709L7.3715 21.5242L7.48301 21.58L7.48303 21.58C8.95065 22.314 9.82575 22.7516 10.7555 22.9261C11.5781 23.0804 12.4222 23.0804 13.2448 22.9261C14.1746 22.7516 15.0497 22.314 16.5173 21.58L16.6288 21.5242L22.3356 18.6709C22.7061 18.4856 22.8562 18.0351 22.671 17.6646C22.4857 17.2941 22.0352 17.144 21.6648 17.3292L15.958 20.1826C14.3449 20.9891 13.6664 21.3208 12.9683 21.4518C12.3284 21.5718 11.6719 21.5718 11.0321 21.4518C10.3339 21.3208 9.65539 20.9891 8.04232 20.1826L2.33557 17.3292Z"
      fill="currentcolor"
      fillRule="evenodd"
    />
  </Icon>
);

export default PlatformIcon;
