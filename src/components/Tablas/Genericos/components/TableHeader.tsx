import { TableHead, TableHeader as TableHeaderCustom, TableRow } from '@/components/ui/table';
import { flexRender, HeaderGroup } from '@tanstack/react-table';

export function TableHeader<T extends object>({ headers }: { headers: HeaderGroup<T>[] }) {
  return (
    <TableHeaderCustom>
      {headers.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeaderCustom>
  );
}
