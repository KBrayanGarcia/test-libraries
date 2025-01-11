import { defaultData, Person } from '@/APIS/fakedata';
import { CustomTable } from '@/components/Tablas/Genericos/TableFactory';
import { TableType } from '@/components/Tablas/Genericos/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Tabla local</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomTable
            columns={columns}
            fn={() => Promise.resolve(defaultData)}
            queryKey={['localData']}
            type={TableType.LOCAL}
          />
        </CardContent>
      </Card>
    </div>
  );
}
