import type { PositionProps, SystemProps } from '@chakra-ui/react';
import type { RowData } from '@tanstack/react-table';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface NautobotUIColumnMeta<TData extends RowData, TValue> {
  /**
   * Render column table header cell (`<th>` element) without sorting handler
   * and pointer styles.
   */
  disableSorting?: boolean;

  /**
   * Don't render given column in table column visibility toggling menu.
   */
  disableColumnVisibilityToggling?: boolean;

  /**
   * Render all column cells (`<th>` and `<td>` elements) with minimum width
   * possible, i.e. with `{ width: 0 }`.
   */
  minimumWidth?: boolean;

  /**
   * Render column table header cell (`<th>` element) without paddings, so
   * that children occupy the whole table header cell space. This is useful
   * for example when the children handle their own pointer events and styles.
   */
  noHeaderCellPaddings?: boolean;

  /**
   * Make given column sticky, i.e. always visible, even when table is too wide
   * to fit inside the browser viewport and overflows. Requires at least one of
   * the position props (`bottom`, `left`, `right` and/or `top`) to be passed
   * explicitly. Optionally, any other style props can be passed, e.g. `zIndex`.
   * Can also be `false` to disable column default sticky behavior.
   */
  sticky?:
    | ((
        | Required<Pick<PositionProps, 'bottom'>>
        | Required<Pick<PositionProps, 'left'>>
        | Required<Pick<PositionProps, 'right'>>
        | Required<Pick<PositionProps, 'top'>>
      ) &
        Partial<SystemProps>)
    | false;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface NautobotUITableMeta<TData extends RowData> {
  /**
   * Render table rows (`<tr>` elements) without hover styles.
   */
  disableRowHover?: boolean;

  /**
   * Render table without table header (`<thead>` element).
   */
  hideTableHeader?: boolean;
}
