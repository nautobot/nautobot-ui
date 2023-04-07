import { Box, forwardRef } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

export interface NautobotGridItemProps extends BoxProps {
  colSpan?: `${number}` | number | null | undefined;
  rowSpan?: `${number}` | number | null | undefined;
}

const NautobotGridItem = forwardRef<NautobotGridItemProps, 'div'>(
  ({ colSpan, rowSpan, ...rest }, ref) => (
    <Box
      ref={ref}
      {...(colSpan ? { gridColumn: `span ${colSpan}` } : undefined)}
      {...(rowSpan ? { gridRow: `span ${rowSpan}` } : undefined)}
      {...rest}
    />
  )
);

NautobotGridItem.displayName = 'NautobotGridItem';

export default NautobotGridItem;
