import { Box, Button } from '@mui/material';
import TablaServer from '@/components/Tablas/TablaServer/TablaServer';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tablas/get-server')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Box>
      <TablaServer />
      <Button variant="contained" color="primary">Primario</Button>
      <Button variant="contained" color="secondary">Secundario</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="success">Success</Button>
    </Box>
  );
}
