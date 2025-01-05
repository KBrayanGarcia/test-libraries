import { CircularProgress, TableBody as MuiTableBody, TableCell, TableRow } from '@mui/material';
import { flexRender, Row } from '@tanstack/react-table';

interface TableBodyProps<T extends object> {
  rows: Row<T>[];
  isLoading?: boolean;
}

export function TableBody<T extends object>({ rows, isLoading }: TableBodyProps<T>) {
  return (
    <MuiTableBody>
      {isLoading ? (
        <TableRow>
          <TableCell colSpan={100} sx={{ textAlign: 'center' }}>
            <CircularProgress />
          </TableCell>
        </TableRow>
      ) : (
        rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </TableRow>
        ))
      )}
    </MuiTableBody>
  );
}
