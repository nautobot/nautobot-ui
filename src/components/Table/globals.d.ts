import type { RowData } from '@tanstack/react-table';

import type { NautobotUIColumnMeta, NautobotUITableMeta } from './types';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue>
    extends NautobotUIColumnMeta<TData, TValue> {}

  interface TableMeta<TData extends RowData>
    extends NautobotUITableMeta<TData> {}
}
