import { Box, Typography } from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/tablas')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box>
      <Typography variant="h4">Tablas</Typography>
      <Outlet />
    </Box>
  );
}
