import { calc } from '@chakra-ui/react';
import type { SystemProps } from '@chakra-ui/react';
import type { useReactTable } from '@tanstack/react-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { RefObject } from 'react';

import { getCssVar } from '../../utils';

export const getCellStickyProps = <Datum extends object>(
  {
    columnId,
    isTableScrolledToTheLeft,
    isTableScrolledToTheRight,
    table,
  }: {
    columnId: string;
    isTableScrolledToTheLeft: boolean;
    isTableScrolledToTheRight: boolean;
    table: ReturnType<typeof useReactTable<Datum>>;
  },
  additionalProps?: Partial<SystemProps>
) => {
  const allLeafColumns = table.getAllLeafColumns();
  const column = allLeafColumns.find(({ id }) => id === columnId);
  const index = column ? allLeafColumns.indexOf(column) : -1;

  const isFirstUserDefinedColumn =
    index === (table.options.enableMultiRowSelection ? 1 : 0);

  const isSticky =
    !!column?.columnDef?.meta?.sticky ||
    (column?.columnDef?.meta?.sticky !== false && isFirstUserDefinedColumn);

  const overlayDirection = allLeafColumns
    .slice(index)
    .every(({ columnDef }) => columnDef?.meta?.sticky)
    ? 'to-l'
    : 'to-r';

  const isOverlayVisible =
    overlayDirection === 'to-l'
      ? !isTableScrolledToTheRight
      : !isTableScrolledToTheLeft;

  return isSticky
    ? {
        position: 'sticky' as const,
        zIndex: 1,
        ...(isFirstUserDefinedColumn
          ? {
              left: table.options.enableMultiRowSelection
                ? calc.add(
                    calc.subtract(getCssVar('space.16').reference, '1px'),
                    getCssVar('sizes.20').reference,
                    getCssVar('space.8').reference
                  )
                : 0,
            }
          : undefined),

        _before: {
          bgGradient: `linear(${overlayDirection}, #000000, #D9D9D900)`,
          content: '""',
          display: 'inline-block',
          height: 'full',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          transitionDuration: 'default',
          transitionProperty: 'opacity, visibility',
          transitionTimingFunction: 'default',
          width: 10,
          [overlayDirection === 'to-r' ? 'right' : 'left']: calc.multiply(
            getCssVar('sizes.10').reference,
            -1
          ),
          ...(isOverlayVisible
            ? { opacity: 0.1, visibility: 'visible' }
            : { opacity: 0, visibility: 'hidden' }),
        },

        ...column?.columnDef?.meta?.sticky,
        ...additionalProps,
      }
    : undefined;
};

export const useTableScrollPosition = (ref: RefObject<HTMLDivElement>) => {
  const node = ref.current;

  const [isTableScrolledToTheLeft, setIsTableScrolledToTheLeft] =
    useState(true);
  const [isTableScrolledToTheRight, setIsTableScrolledToTheRight] =
    useState(true);

  const updateScrollPosition = useCallback(() => {
    if (ref.current) {
      const { clientWidth, scrollLeft, scrollWidth } = ref.current;

      setIsTableScrolledToTheLeft(scrollLeft <= 0);
      setIsTableScrolledToTheRight(scrollWidth <= clientWidth + scrollLeft);
    }
  }, [ref, setIsTableScrolledToTheLeft, setIsTableScrolledToTheRight]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateScrollPosition();
    });

    if (ref.current) {
      ref.current.addEventListener('scroll', updateScrollPosition);
      resizeObserver.observe(ref.current);
    }

    return () => {
      node?.removeEventListener('scroll', updateScrollPosition);
      resizeObserver.disconnect();
    };
  }, [node, ref, updateScrollPosition]);

  return useMemo(
    () => ({ isTableScrolledToTheLeft, isTableScrolledToTheRight }),
    [isTableScrolledToTheLeft, isTableScrolledToTheRight]
  );
};
