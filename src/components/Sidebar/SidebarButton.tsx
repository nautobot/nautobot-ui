import React from 'react';

import { Button, TreeEdge } from '../..';
import type { ButtonProps, TreeEdgeProps } from '../..';

export interface SidebarButtonProps extends ButtonProps {
  level: 0 | 1 | 2 | '0' | '1' | '2';
  isFirst?: boolean;
  isLast?: boolean;
  treeEdgeProps?: TreeEdgeProps;
}

const SidebarButton = ({
  children,
  isFirst,
  isLast,
  level,
  treeEdgeProps,
  ...rest
}: SidebarButtonProps) => (
  <Button
    _disabled={{ color: 'gray-2', pointerEvents: 'none' }}
    color="white-0"
    gap="xs"
    justifyContent="flex-start"
    paddingX="md"
    variant="unstyled"
    width="full"
    {...[
      {
        _focus: { background: 'navy-1', color: 'orange-0' },
        _hover: { background: 'navy-1', color: 'orange-0' },
        background: 'navy-0',
        height: 34,
        fontSize: 'md',
      },
      {
        _focus: { background: 'navy-2', color: 'orange-0' },
        _hover: { background: 'navy-2', color: 'orange-0' },
        background: 'navy-1',
        height: 44,
        fontSize: 'sm',
      },
      {
        _focus: { color: 'orange-0' },
        _hover: { color: 'orange-0' },
        background: 'navy-2',
        paddingLeft: 'xl',
        height: 44,
        fontSize: 'sm',
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
);

export default SidebarButton;
