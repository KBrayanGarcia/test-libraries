import { Table } from '@/components/ui/table';
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
    <div className="overflow-auto max-w-full">
      <Table className="h-full max-w-full">
        <TableHeader headers={table.getHeaderGroups()} />
        <TableBody rows={table.getRowModel().rows} isLoading={isLoading} />
      </Table>
    </div>
  );
}
