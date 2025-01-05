import { Paper, Table, TableContainer } from '@mui/material';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { useQuery } from '@tanstack/react-query';
import { BaseTableProps } from '../types';

export function BaseTable<T extends object>({ fn, queryKey, ...tableHooksProps }: BaseTableProps<T>) {
  const { data, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: fn,
  });

  const table = useReactTable<T>({
    ...tableHooksProps,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer component={Paper} sx={{ overflow: 'auto', maxWidth: '100%' }}>
      <Table aria-label="data table" sx={{ height: '100%', maxWidth: '100%' }}>
        <TableHeader headers={table.getHeaderGroups()} />
        <TableBody rows={table.getRowModel().rows} isLoading={isLoading} />
      </Table>
    </TableContainer>
  );
}