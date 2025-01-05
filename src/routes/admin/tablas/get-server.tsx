import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { CustomTable } from '@/components/Tablas/Genericos/TableFactory';
import { TableType } from '@/components/Tablas/Genericos/types';
import { createFileRoute } from '@tanstack/react-router';
import { defaultData, Person } from '@/APIS/fakedata';
import { ColumnDef } from '@tanstack/react-table';

export const Route = createFileRoute('/admin/tablas/get-server')({
  component: RouteComponent,
});

function RouteComponent() {
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

  return (
    <Box>
      <Card>
        <CardHeader title="Tabla Server" />
        <CardContent>
          <CustomTable
            columns={columns}
            fn={() => new Promise((resolve) => setTimeout(() => resolve(defaultData), 1000)).then(() => defaultData)}
            queryKey={['serverData']}
            type={TableType.SERVER}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
