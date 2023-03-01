import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { CellContext, TableOptions } from '@tanstack/react-table';
import { useMemo } from 'react';
import type { ElementType } from 'react';

import {
  getColumnDefActionMenu,
  getColumnDefMultiRowSelection,
} from './columnDef';

export interface UseTableRendererProps<Datum extends object>
  extends Omit<TableOptions<Datum>, 'getCoreRowModel'>,
    Partial<Pick<TableOptions<Datum>, 'getCoreRowModel'>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actionMenu?: ElementType<{ cellContext: CellContext<Datum, any> }>;
}

const useTableRenderer = <Datum extends object>({
  actionMenu,
  columns,
  enableMultiRowSelection,
  getCoreRowModel: getCoreRowModelProp,
  getSortedRowModel: getSortedRowModelProp,
  meta: tableMeta,
  ...rest
}: UseTableRendererProps<Datum>) => {
  const columnsWithAdditionalColumnDefs = useMemo(() => {
    const isColumnVisibilityTogglingEnabled = columns.some(
      ({ meta: columnMeta }) =>
        columnMeta?.disableColumnVisibilityToggling !== true
    );

    return [
      ...(enableMultiRowSelection
        ? [getColumnDefMultiRowSelection<Datum>()]
        : []),
      ...columns,
      ...(actionMenu ||
      (isColumnVisibilityTogglingEnabled && !tableMeta?.hideTableHeader)
        ? [getColumnDefActionMenu<Datum>({ actionMenu })]
        : []),
    ];
  }, [
    actionMenu,
    columns,
    enableMultiRowSelection,
    tableMeta?.hideTableHeader,
  ]);

  return useReactTable({
    columns: columnsWithAdditionalColumnDefs,
    enableMultiRowSelection,
    getCoreRowModel: getCoreRowModelProp ?? getCoreRowModel(),
    getSortedRowModel: getSortedRowModelProp ?? getSortedRowModel(),
    meta: tableMeta,
    ...rest,
  });
};

export default useTableRenderer;
