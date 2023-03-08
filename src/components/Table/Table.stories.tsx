import { Flex, Tag, TagLabel } from '@chakra-ui/react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import type { CellContext } from '@tanstack/react-table';
import React, { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import {
  Button,
  EditIcon,
  TableContainer,
  Table,
  TableRenderer as TableRendererComponent,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useTableRenderer,
} from '../..';
import type { UseTableRendererProps } from '../..';

const Story: ComponentMeta<typeof Table> = {
  component: TableRendererComponent,
  title: 'Components/Table',
};

export default Story;

interface Datum {
  description: string;
  name: string;
  state: string;
}

interface Props
  extends Omit<UseTableRendererProps<Datum>, 'columns' | 'data' | 'meta'> {
  disableRowHover?: boolean;
  hideTableHeader?: boolean;
}

const Template: ComponentStory<(props: Props) => ReactElement> = ({
  disableRowHover,
  hideTableHeader,
  ...restArgs
}: Props) => {
  const isTableRenderer = disableRowHover !== undefined;

  const columnHelper = useMemo(() => createColumnHelper<Datum>(), []);

  const ActionMenu = useCallback(
    ({ cellContext }: { cellContext: CellContext<Datum, unknown> }) => (
      <Button
        leftIcon={<EditIcon size="sm" />}
        size="xs"
        variant="table"
        onClick={() => alert(`Clicked ${cellContext.row.original.name}!`)}
      />
    ),
    []
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('description', {
        header: 'Description',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('state', {
        header: 'Status',
        cell: ({ getValue }: { getValue: () => string }) => (
          <Tag variant={getValue() === 'ready' ? 'success' : 'action'}>
            <TagLabel>
              {getValue().replace(/^(.)/, (_, p1) => p1.toUpperCase())}
            </TagLabel>
          </Tag>
        ),
      }),
    ],
    [columnHelper]
  );

  const data = useMemo(
    () => [
      {
        description: "This is a production Nautobot instance. Don't touch it!",
        name: 'Nautobot Production',
        state: 'ready',
      },
      {
        description: 'This is my personal Nautobot instance',
        name: 'My Nautobot',
        state: 'busy',
      },
      {
        description: "This is someone else's Nautobot instance",
        name: "Someone else's Nautobot",
        state: 'ready',
      },
    ],
    []
  );

  const meta = useMemo(
    () => ({ disableRowHover, hideTableHeader }),
    [disableRowHover, hideTableHeader]
  );

  const table = useTableRenderer({
    actionMenu: ActionMenu,
    columns,
    data,
    meta,
    ...restArgs,
  });

  return (
    <Flex align="center" background="white-0" padding="md">
      {isTableRenderer ? (
        <TableRendererComponent table={table} />
      ) : (
        <TableContainer>
          <Table>
            <Thead>
              <Tr _hover={{}}>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>Nautobot Production</Td>
                <Td>
                  This is a production Nautobot instance. Do not touch it!
                </Td>
                <Td>
                  <Tag variant="success">
                    <TagLabel>Ready</TagLabel>
                  </Tag>
                </Td>
              </Tr>
              <Tr>
                <Td>My Nautobot</Td>
                <Td>This is my personal Nautobot instance</Td>
                <Td>
                  <Tag variant="action">
                    <TagLabel>Busy</TagLabel>
                  </Tag>
                </Td>
              </Tr>
              <Tr>
                <Td>Someone else&apos;s Nautobot</Td>
                <Td>This is someone else&apos;s Nautobot instance</Td>
                <Td>
                  <Tag variant="success">
                    <TagLabel>Ready</TagLabel>
                  </Tag>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Flex>
  );
};

export const Basic = Template.bind({});

Basic.parameters = { controls: { include: [] } };

export const TableRenderer = Template.bind({});

TableRenderer.argTypes = {
  enableMultiRowSelection: {
    defaultValue: false,
    type: { name: 'boolean', required: false },
  },
  disableRowHover: {
    defaultValue: false,
    name: 'meta.disableRowHover',
    type: { name: 'boolean', required: false },
  },
  hideTableHeader: {
    defaultValue: false,
    name: 'meta.hideTableHeader',
    type: { name: 'boolean', required: false },
  },
};

TableRenderer.parameters = {
  controls: {
    include: [
      'enableMultiRowSelection',
      'meta.disableRowHover',
      'meta.hideTableHeader',
    ],
  },
};
