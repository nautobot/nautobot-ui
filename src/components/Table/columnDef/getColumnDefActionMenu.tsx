import { calc, cssVar } from '@chakra-ui/react';
import type { CellContext, HeaderContext } from '@tanstack/react-table';
import React from 'react';
import type { ElementType } from 'react';

import {
  Button,
  Checkbox,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '../..';
import { SettingsIcon } from '../../../icons';

const $chakraSpace16 = cssVar('chakra-space-16');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColumnDefActionMenu = <Datum extends object, TValue = any>({
  actionMenu: ActionMenu,
}: {
  actionMenu?: ElementType<{ cellContext: CellContext<Datum, TValue> }>;
}) => ({
  cell: (cellContext: CellContext<Datum, TValue>) =>
    ActionMenu ? <ActionMenu cellContext={cellContext} /> : null,

  header: ({ table }: HeaderContext<Datum, TValue>) => (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button
          _active={{ background: 'blue-10%' }}
          _hover={{ background: 'blue-10%' }}
          borderRadius={0}
          color="blue-1"
          height="auto"
          leftIcon={<SettingsIcon size="sm" />}
          paddingLeft={8}
          paddingRight={calc.subtract($chakraSpace16.reference, '1px')}
          paddingY="11px"
          variant="unstyled"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          {table
            .getAllLeafColumns()
            .filter(
              ({ columnDef: { meta } }) =>
                meta?.disableColumnVisibilityToggling !== true
            )
            .map(
              (
                {
                  columnDef: { header },
                  getIsVisible,
                  getToggleVisibilityHandler,
                  id,
                },
                index,
                array
              ) => {
                const visibleColumns = array.reduce(
                  (visibleColumnsCount, column) =>
                    visibleColumnsCount + (column.getIsVisible() ? 1 : 0),
                  0
                );

                const isVisible = getIsVisible();

                return (
                  <Checkbox
                    key={id}
                    isChecked={isVisible}
                    isDisabled={visibleColumns === 1 && isVisible}
                    paddingX="md"
                    paddingY="xs"
                    size="sm"
                    onChange={getToggleVisibilityHandler()}
                  >
                    {String(header)}
                  </Checkbox>
                );
              }
            )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ),

  id: 'actionMenu',

  meta: {
    disableSorting: true,
    disableColumnVisibilityToggling: true,
    minimumWidth: true,
    noHeaderCellPaddings: true,
  },
});

export default getColumnDefActionMenu;
