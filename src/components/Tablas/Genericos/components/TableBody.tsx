import { TableBody as TableBodyCustom, TableCell, TableRow } from '@/components/ui/table';
import { flexRender, Row } from '@tanstack/react-table';
import { Loader2 } from 'lucide-react';

interface TableBodyProps<T extends object> {
  rows: Row<T>[];
  isLoading?: boolean;
}

export function TableBody<T extends object>({ rows, isLoading }: TableBodyProps<T>) {
  return (
    <TableBodyCustom>
      {isLoading ? (
        <TableRow>
          <TableCell colSpan={100}>
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin" />
            </div>
          </TableCell>
        </TableRow>
      ) : (
        rows.map((row) => (
          <TableRow key={row.id} className="hover:bg-muted/50">
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </TableRow>
        ))
      )}
    </TableBodyCustom>
  );
}
