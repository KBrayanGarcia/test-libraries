import { Box, Card, CardContent } from '@mui/material';
import TablaServer from '@/components/Tablas/TablaServer/TablaServer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/tablas/get-server')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box>
      <Card>
        <CardContent>
          <TablaServer />
        </CardContent>
      </Card>
    </Box>
  );
}
