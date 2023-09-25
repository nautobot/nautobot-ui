import { calc } from '@chakra-ui/react';
import type { CellContext, HeaderContext } from '@tanstack/react-table';
import React from 'react';
import type { ElementType } from 'react';

import { SettingsIcon } from '../../../icons';
import { getCssVar } from '../../../utils';
import Button from '../../Button';
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '../../Menu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColumnDefActionMenu = <Datum extends object, TValue = any>({
  actionMenu: ActionMenu,
}: {
  actionMenu?: ElementType<{ cellContext: CellContext<Datum, TValue> }>;
}) => ({
  cell: (cellContext: CellContext<Datum, TValue>) =>
    ActionMenu ? <ActionMenu cellContext={cellContext} /> : null,

  header: ({ table }: HeaderContext<Datum, TValue>) => (
    <Menu closeOnSelect={false} placement="bottom-end" strategy="fixed">
      <MenuButton
        _active={{ background: 'blue-10%' }}
        _focusVisible={{ background: 'blue-10%' }}
        _hover={{ background: 'blue-10%' }}
        as={Button}
        borderRadius={0}
        color="blue-1"
        height="auto"
        leftIcon={<SettingsIcon size="sm" />}
        paddingLeft={8}
        paddingRight={calc.subtract(getCssVar('space.16').reference, '1px')}
        paddingY={calc.subtract(getCssVar('space.12').reference, '1px')}
        variant="unstyled"
      />
      <MenuList restrictToViewport>
        <MenuOptionGroup
          type="checkbox"
          value={table.getVisibleLeafColumns().map(({ id }) => id)}
          onChange={(columns: string | string[]) => {
            table.setColumnVisibility(() =>
              table.getAllLeafColumns().reduce(
                (columnVisibility, { id }) => ({
                  ...columnVisibility,
                  ...((typeof columns === 'string'
                    ? [columns]
                    : columns
                  ).includes(id)
                    ? undefined
                    : { [id]: false }),
                }),
                {}
              )
            );
          }}
        >
          {table
            .getAllLeafColumns()
            .filter(
              ({ columnDef: { meta } }) =>
                meta?.disableColumnVisibilityToggling !== true
            )
            .map(
              ({ columnDef: { header }, getIsVisible, id }, index, array) => {
                const visibleColumns = array.reduce(
                  (visibleColumnsCount, column) =>
                    visibleColumnsCount + (column.getIsVisible() ? 1 : 0),
                  0
                );

                const isVisible = getIsVisible();

                return (
                  <MenuItemOption
                    key={id}
                    isChecked={isVisible}
                    isDisabled={visibleColumns === 1 && isVisible}
                    value={id}
                  >
                    {String(header)}
                  </MenuItemOption>
                );
              }
            )}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  ),

  id: 'actionMenu',

  meta: {
    disableSorting: true,
    disableColumnVisibilityToggling: true,
    minimumWidth: true,
    noHeaderCellPaddings: true,
    sticky: { right: 0 },
  },
});

export default getColumnDefActionMenu;
