import { forwardRef } from '@chakra-ui/react';
import React from 'react';

import { Button, TreeEdge } from '../..';
import type { ButtonProps, TreeEdgeProps } from '../..';

export interface SidebarButtonProps extends ButtonProps {
  level: 0 | 1 | 2 | '0' | '1' | '2';
  isFirst?: boolean;
  isLast?: boolean;
  treeEdgeProps?: TreeEdgeProps;
  active?: boolean;
}

const SidebarButton = forwardRef<SidebarButtonProps, 'button'>(
  ({ active = false, children, isFirst, isLast, level, treeEdgeProps, ...rest }, ref) => (
    <Button
      ref={ref}
      _disabled={{ color: 'gray-2', pointerEvents: 'none' }}
      color={active ? 'orange-0' : 'gray-1'}
      gap="xs"
      justifyContent="flex-start"
      paddingX="md"
      variant="unstyled"
      width="full"
      {...[
        {
          background: 'navy-0',
          height: 34,
          fontSize: 'md',
          _focusVisible: { background: 'navy-1', color: 'orange-0' },
          _hover: { background: 'navy-1', color: 'orange-0' },
        },
        {
          background: 'navy-1',
          height: 44,
          fontSize: 'sm',
          _focusVisible: { background: 'navy-2', color: 'orange-0' },
          _hover: { background: 'navy-2', color: 'orange-0' },
        },
        {
          background: 'navy-2',
          paddingLeft: 'xl',
          height: 44,
          fontSize: 'sm',
          _focusVisible: { color: 'orange-0' },
          _hover: { color: 'orange-0' },
        },
      ][Number(level)]}
      {...rest}
    >
      {Number(level) !== 0 ? (
        <TreeEdge
          variant={`sidebar${isFirst ? 'First' : isLast ? 'Last' : ''}`}
          {...treeEdgeProps}
        />
      ) : null}
      {children}
    </Button>
  )
);

SidebarButton.displayName = 'SidebarButton';

export default SidebarButton;
