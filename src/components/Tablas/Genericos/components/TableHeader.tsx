import { TableCell, TableHead, TableRow } from '@mui/material';
import { flexRender, HeaderGroup } from '@tanstack/react-table';

export function TableHeader<T extends object>({headers}: {headers: HeaderGroup<T>[]}) {
  return (
    <TableHead>
      {headers.map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}
