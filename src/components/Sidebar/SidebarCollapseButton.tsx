import { forwardRef } from '@chakra-ui/react';
import type { ChakraProps } from '@chakra-ui/react';
import React, { useCallback } from 'react';

import { ArrowLeftIcon, Button } from '../..';
import type { ButtonProps } from '../..';

import { useSidebarContext } from './';

export interface SidebarCollapseButtonProps extends ButtonProps {}

const SidebarCollapseButton = forwardRef<SidebarCollapseButtonProps, 'button'>(
  (props, ref) => {
    const {
      isCollapsed,
      setIsCollapsed,
      style: { collapseButton },
    } = useSidebarContext();

    const onClick = useCallback(() => {
      setIsCollapsed((currentIsCollapsed) => !currentIsCollapsed);
    }, [setIsCollapsed]);

    return (
      <Button
        ref={ref}
        aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        leftIcon={
          <ArrowLeftIcon
            size="xs"
            {...(isCollapsed ? { variant: 'rotate-180' } : undefined)}
          />
        }
        type="button"
        variant="primaryAction"
        onClick={onClick}
        {...(collapseButton as ChakraProps)}
        {...props}
      />
    );
  }
);

SidebarCollapseButton.displayName = 'SidebarCollapseButton';

export default SidebarCollapseButton;
