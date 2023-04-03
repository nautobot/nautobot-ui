import { forwardRef, useMenuContext } from '@chakra-ui/react';
import React from 'react';

import { ArrowDownIcon } from '../..';
import type { IconProps } from '../..';

export interface BreadcrumbMenuArrowDownIconProps extends IconProps {}

const BreadcrumbMenuArrowDownIcon = forwardRef<
  BreadcrumbMenuArrowDownIconProps,
  'svg'
>((props, ref) => {
  const { isOpen } = useMenuContext();

  return (
    <ArrowDownIcon
      ref={ref}
      size="xs"
      {...(isOpen ? { variant: 'rotate-180' } : undefined)}
      {...props}
    />
  );
});

BreadcrumbMenuArrowDownIcon.displayName = 'BreadcrumbMenuArrowDownIcon';

export default BreadcrumbMenuArrowDownIcon;
