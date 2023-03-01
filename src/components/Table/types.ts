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
