import { Flex } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';
import type { useReactTable } from '@tanstack/react-table';
import React, { useRef } from 'react';

import { SortAscendingIcon } from '../../icons';

import { getCellStickyProps, useTableScrollPosition } from './utils';

import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from './';
import type { TableContainerProps, TableProps } from './';

export interface TableRendererProps<Datum extends object> extends TableProps {
  table: ReturnType<typeof useReactTable<Datum>>;
  containerProps?: TableContainerProps;
}

const TableRenderer = <Datum extends object>({
  containerProps,
  table,
  ...rest
}: TableRendererProps<Datum>) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { isTableScrolledToTheLeft, isTableScrolledToTheRight } =
    useTableScrollPosition(tableContainerRef);

  return (
    <TableContainer ref={tableContainerRef} {...containerProps}>
      <Table {...rest}>
        {table.options.meta?.hideTableHeader ? null : (
          <Thead>
            {table.getHeaderGroups().map(({ headers, id }) => (
              <Tr key={id}>
                {headers.map(({ column, getContext, id: headerId }) => {
                  const optionalStyle = {
                    ...(column.columnDef.meta?.minimumWidth
                      ? { width: 0 }
                      : undefined),
                    ...(column.columnDef.meta?.noHeaderCellPaddings
                      ? {
                          _first: { padding: 0 },
                          _last: { padding: 0 },
                          padding: 0,
                        }
                      : undefined),
                    ...getCellStickyProps(
                      {
                        columnId: column.id,
                        isTableScrolledToTheLeft,
                        isTableScrolledToTheRight,
                        table,
                      },
                      { zIndex: 2 }
                    ),
                  };

                  return column.columnDef.meta?.disableSorting ? (
                    <Th key={headerId} {...optionalStyle}>
                      {flexRender(column.columnDef.header, getContext())}
                    </Th>
                  ) : (
                    <Th
                      key={headerId}
                      _hover={{ background: 'blue-10%' }}
                      cursor="pointer"
                      tabIndex={0}
                      transitionDuration="default"
                      transitionProperty="background"
                      transitionTimingFunction="default"
                      onClick={column.getToggleSortingHandler()}
                      {...optionalStyle}
                    >
                      <Flex align="center" height="full" width="full">
                        {flexRender(column.columnDef.header, getContext())}
                        <SortAscendingIcon
                          display="inline-block"
                          flex="none"
                          marginLeft="sm"
                          sx={{
                            '>': (() => {
                              const isSorted = column.getIsSorted();

                              if (isSorted === 'asc') {
                                return {
                                  _first: { stroke: 'blue-1' },
                                  _last: { stroke: 'currentcolor' },
                                };
                              } else if (isSorted === 'desc') {
                                return {
                                  _first: { stroke: 'currentcolor' },
                                  _last: { stroke: 'blue-1' },
                                };
                              }
                              return {
                                _first: { stroke: 'currentcolor' },
                                _last: { stroke: 'currentcolor' },
                              };
                            })(),
                          }}
                          transitionDuration="default"
                          transitionProperty="opacity, visibility"
                          transitionTimingFunction="default"
                          {...(column.getIsSorted()
                            ? {
                                'aria-label':
                                  column.getIsSorted() === 'asc'
                                    ? 'Ascending'
                                    : 'Descending',
                                opacity: 1,
                                visibility: 'visible',
                              }
                            : {
                                'aria-hidden': true,
                                opacity: 0,
                                visibility: 'hidden',
                              })}
                        />
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
        )}

        <Tbody>
          {table.getRowModel().rows.map(({ getVisibleCells, id }) => (
            <Tr
              key={id}
              {...(table.options.meta?.disableRowHover
                ? { _hover: {} }
                : undefined)}
            >
              {getVisibleCells().map(({ column, getContext, id: cellId }) => (
                <Td
                  key={cellId}
                  {...(column.columnDef.meta?.minimumWidth
                    ? { width: 0 }
                    : undefined)}
                  {...getCellStickyProps({
                    columnId: column.id,
                    isTableScrolledToTheLeft,
                    isTableScrolledToTheRight,
                    table,
                  })}
                >
                  {flexRender(column.columnDef.cell, getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

TableRenderer.displayName = 'TableRenderer';

export default TableRenderer;
