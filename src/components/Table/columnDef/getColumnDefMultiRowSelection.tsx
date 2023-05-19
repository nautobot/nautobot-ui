import type { CellContext, HeaderContext } from '@tanstack/react-table';
import React from 'react';

import { Checkbox } from '../..';
import { Flex } from '../../..';

const getColumnDefMultiRowSelection = <
  Datum extends object,
  TValue = any // eslint-disable-line @typescript-eslint/no-explicit-any
>() => ({
  cell: ({ row }: CellContext<Datum, TValue>) => (
    <Flex align="center" height="full" justify="center" width="full">
      <Checkbox
        isChecked={row.getIsSelected()}
        isIndeterminate={row.getIsSomeSelected()}
        size="sm"
        onChange={row.getToggleSelectedHandler()}
      />
    </Flex>
  ),

  header: ({ table }: HeaderContext<Datum, TValue>) => (
    <Flex align="center" height="full" justify="center" width="full">
      <Checkbox
        isChecked={table.getIsAllRowsSelected()}
        isIndeterminate={table.getIsSomeRowsSelected()}
        size="sm"
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    </Flex>
  ),

  id: 'multiRowSelection',

  meta: {
    disableSorting: true,
    disableColumnVisibilityToggling: true,
    minimumWidth: true,
    sticky: { left: 0 },
  },
});

export default getColumnDefMultiRowSelection;
