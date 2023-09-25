import { calc } from '@chakra-ui/react';
import type { SystemProps } from '@chakra-ui/react';
import type { useReactTable } from '@tanstack/react-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { RefObject } from 'react';

import { getCssVar } from '../../utils';

export const getCellStickyProps = <Datum extends object>({
  columnId,
  isTableScrolledToTheLeft,
  isTableScrolledToTheRight,
  isTh,
  table,
}: {
  columnId: string;
  isTableScrolledToTheLeft: boolean;
  isTableScrolledToTheRight: boolean;
  isTh: boolean;
  table: ReturnType<typeof useReactTable<Datum>>;
}) => {
  const allLeafColumns = table.getAllLeafColumns();
  const column = allLeafColumns.find(({ id }) => id === columnId);
  const index = column ? allLeafColumns.indexOf(column) : -1;

  const isBeforeFirstUserDefinedColumn =
    Boolean(table.options.enableMultiRowSelection) && index === 0;
  const isFirstUserDefinedColumn =
    index === (table.options.enableMultiRowSelection ? 1 : 0);

  const isSticky =
    !!column?.columnDef?.meta?.sticky ||
    (column?.columnDef?.meta?.sticky !== false &&
      (isFirstUserDefinedColumn || isTh));

  const overlayPlacement = allLeafColumns
    .slice(index)
    .every(({ columnDef }) => columnDef?.meta?.sticky)
    ? 'left'
    : 'right';

  const isOverlayVisible =
    overlayPlacement === 'left'
      ? !isTableScrolledToTheRight
      : !isTableScrolledToTheLeft;

  return isSticky
    ? {
        position: 'sticky' as const,
        zIndex:
          1 +
          (isBeforeFirstUserDefinedColumn || isFirstUserDefinedColumn ? 1 : 0) +
          (isTh ? 2 : 0),

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
        ...(isTh ? { top: 0 } : undefined),

        [overlayPlacement === 'left' ? '_before' : '_after']: getOverlayStyle(
          overlayPlacement,
          isOverlayVisible
        ),

        ...column?.columnDef?.meta?.sticky,
      }
    : undefined;
};

export const getOverlayStyle = (
  placement: 'bottom' | 'left' | 'right' | 'top',
  isOverlayVisible: boolean,
  overrides?: SystemProps
) => {
  const isHorizontal = placement === 'left' || placement === 'right';

  const overlayDirection = {
    bottom: 'to-t',
    left: 'to-l',
    right: 'to-r',
    top: 'to-b',
  }[placement];

  return {
    bgGradient: `linear(${overlayDirection}, #000000, #D9D9D900)`,
    content: '""',
    pointerEvents: 'none',
    transitionDuration: 'default',
    transitionProperty: 'opacity, visibility',
    transitionTimingFunction: 'default',

    ...(isHorizontal
      ? {
          display: 'inline-block',
          height: 'full',
          position: 'absolute',
          top: 0,
          width: 10,
          [placement]: calc.multiply(getCssVar('sizes.10'), -1),
        }
      : {
          display: 'block',
          height: 10,
          left: 0,
          position: 'sticky',
          width: 'full',
          zIndex: placement === 'bottom' ? 2 : 3,
          [placement]:
            placement === 'bottom'
              ? 0
              : calc.add(
                  getCssVar('lineHeights.normal'),
                  calc.multiply(calc.subtract(getCssVar('space.sm'), '1px'), 2)
                ),
          [placement === 'bottom' ? 'marginTop' : 'marginBottom']:
            calc.multiply(getCssVar('sizes.10'), -1),
        }),

    ...(isOverlayVisible
      ? { opacity: 0.1, visibility: 'visible' }
      : { opacity: 0, visibility: 'hidden' }),

    ...overrides,
  };
};

export const useTableScrollPosition = (ref: RefObject<HTMLDivElement>) => {
  const node = ref.current;

  const [isTableScrolledToTheBottom, setIsTableScrolledToTheBottom] =
    useState(true);
  const [isTableScrolledToTheLeft, setIsTableScrolledToTheLeft] =
    useState(true);
  const [isTableScrolledToTheRight, setIsTableScrolledToTheRight] =
    useState(true);
  const [isTableScrolledToTheTop, setIsTableScrolledToTheTop] = useState(true);

  const updateScrollPosition = useCallback(() => {
    if (ref.current) {
      const {
        clientHeight,
        clientWidth,
        scrollHeight,
        scrollLeft,
        scrollWidth,
        scrollTop,
      } = ref.current;

      setIsTableScrolledToTheBottom(scrollHeight <= clientHeight + scrollTop);
      setIsTableScrolledToTheLeft(scrollLeft <= 0);
      setIsTableScrolledToTheRight(scrollWidth <= clientWidth + scrollLeft);
      setIsTableScrolledToTheTop(scrollTop <= 0);
    }
  }, [
    ref,
    setIsTableScrolledToTheBottom,
    setIsTableScrolledToTheLeft,
    setIsTableScrolledToTheRight,
    setIsTableScrolledToTheTop,
  ]);

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
    () => ({
      isTableScrolledToTheBottom,
      isTableScrolledToTheLeft,
      isTableScrolledToTheRight,
      isTableScrolledToTheTop,
    }),
    [
      isTableScrolledToTheBottom,
      isTableScrolledToTheLeft,
      isTableScrolledToTheRight,
      isTableScrolledToTheTop,
    ]
  );
};
