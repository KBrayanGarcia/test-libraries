import { Box } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import AppBarAdmin from '@/components/Appbars/AppBarAdmin';

export const Route = createLazyFileRoute('/admin/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarAdmin />
    </Box>
  );
}
