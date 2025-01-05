import { defaultData, Person } from '@/APIS/fakedata';
import { CustomTable } from '@/components/Tablas/Genericos/TableFactory';
import { TableType } from '@/components/Tablas/Genericos/types';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';

export const Route = createFileRoute('/admin/tablas/local')({
  component: RouteComponent,
});

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
  },
];

function RouteComponent() {
  return (
    <Box>
      <Card>
        <CardHeader title="Tabla local" />
        <CardContent>
          <CustomTable
            columns={columns}
            fn={() => Promise.resolve(defaultData)}
            queryKey={['localData']}
            type={TableType.LOCAL}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
