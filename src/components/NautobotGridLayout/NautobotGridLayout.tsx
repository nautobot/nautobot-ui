import { chakra, forwardRef, useStyleConfig } from '@chakra-ui/react';
import type { HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import React, { Children, cloneElement, useCallback } from 'react';
import type { ReactElement } from 'react';

export type NautobotGridCellsSpan =
  | number
  | `${number}`
  | `${number} ${number}`
  | `${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number}`
  | `${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number} ${number}`;

export type NautobotGridCellsConfig<Cells extends 'columns' | 'rows'> = {
  count?: `${number}` | number | null | undefined;
  cyclicSpan?: boolean | null | undefined;
  span?: NautobotGridCellsSpan | null | undefined;
} & (Cells extends 'columns'
  ? {
      maxWidth?: string | number | null | undefined;
      minWidth?: string | number | null | undefined;
    }
  : {
      maxHeight?: string | number | null | undefined;
      minHeight?: string | number | null | undefined;
    });

export interface NautobotGridLayoutProps
  extends Omit<HTMLChakraProps<'div'>, 'children'>,
    ThemingProps<'NautobotGridLayout'> {
  children?: ReactElement | ReactElement[];
  columns?:
    | NautobotGridCellsConfig<'columns'>
    | NautobotGridCellsSpan
    | null
    | undefined;
  rows?:
    | NautobotGridCellsConfig<'rows'>
    | NautobotGridCellsSpan
    | null
    | undefined;
}

const NautobotGridLayout = forwardRef<NautobotGridLayoutProps, 'div'>(
  (
    {
      children,
      colorScheme,
      columns,
      orientation,
      rows,
      size,
      styleConfig,
      variant,
      ...rest
    },
    ref
  ) => {
    const styles = useStyleConfig('NautobotGridLayout', {
      colorScheme,
      orientation,
      size,
      styleConfig,
      variant,
    });

    const getCellsSpan = useCallback(
      (
        cells:
          | NautobotGridLayoutProps['columns']
          | NautobotGridLayoutProps['rows']
      ) => {
        const cellsSpanTemplate = (() => {
          if (typeof cells == 'object' && typeof cells?.span === 'string') {
            return cells.span;
          }

          if (typeof cells === 'string') {
            return cells;
          }

          return undefined;
        })();

        const cellsSpan = cellsSpanTemplate?.trim().split(' ').filter(Boolean);

        /*
         * If `cellsSpan.length` is `0`, then there is no template given,
         * because how are you supposed to span 0 columns or rows? In this case
         * return `undefined` and ignore cells span.
         */
        return cellsSpan && cellsSpan.length > 0 ? cellsSpan : undefined;
      },
      []
    );

    const getCellsCount = useCallback(
      (
        cells:
          | NautobotGridLayoutProps['columns']
          | NautobotGridLayoutProps['rows'],
        defaultValue?: number
      ) => {
        if (typeof cells === 'object' && !Number.isNaN(Number(cells?.count))) {
          return Number(cells?.count);
        }

        return (
          defaultValue ??
          getCellsSpan(cells)?.reduce(
            (count, cellTemplate) => count + Number(cellTemplate),
            0
          )
        );
      },
      [getCellsSpan]
    );

    const isColumnSpanCyclic =
      typeof columns !== 'object' || columns?.cyclicSpan !== false;
    const isRowSpanCyclic =
      typeof rows !== 'object' || rows?.cyclicSpan !== false;

    const columnsCount = getCellsCount(columns, 4);
    const rowsCount = getCellsCount(rows);

    const colSpans = getCellsSpan(columns);
    const rowSpans = getCellsSpan(rows);

    const autoColumns = `minmax(${
      (typeof columns === 'object' && columns?.minWidth) || 'min-content'
    }, ${(typeof columns === 'object' && columns?.maxWidth) || '1fr'})`;

    const autoRows = `minmax(${
      (typeof rows === 'object' && rows?.minHeight) || 'min-content'
    }, ${(typeof rows === 'object' && rows?.maxHeight) || '1fr'})`;

    return (
      <chakra.div
        ref={ref}
        __css={styles}
        gridAutoColumns={autoColumns}
        gridAutoRows={autoRows}
        {...(columnsCount
          ? { gridTemplateColumns: `repeat(${columnsCount}, ${autoColumns})` }
          : undefined)}
        {...(rowsCount
          ? { gridTemplateRows: `repeat(${rowsCount}, ${autoRows})` }
          : undefined)}
        {...rest}
      >
        {Children.map(children, (child, index) => {
          const colSpan =
            colSpans?.[isColumnSpanCyclic ? index % colSpans.length : index];
          const rowSpan =
            rowSpans?.[isRowSpanCyclic ? index % rowSpans.length : index];

          return child && (colSpan || rowSpan)
            ? cloneElement(child, {
                ...(colSpan ? { gridColumn: `span ${colSpan}` } : undefined),
                ...(rowSpan ? { gridRow: `span ${rowSpan}` } : undefined),
                ...child.props,
              })
            : child;
        })}
      </chakra.div>
    );
  }
);

NautobotGridLayout.displayName = 'NautobotGridLayout';

export default NautobotGridLayout;
