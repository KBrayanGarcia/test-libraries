import AppBarAdmin from '@/components/Appbars/AppBarAdmin';
import { useStatePageAdmin } from '@/hooks/pages/useStatePageAdmin';
import { Box } from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import Grid from '@mui/material/Grid2';
import SidebarAdmin from '@/components/Sidebars/SidebarAdmin/SidebarAdmin';
import NotFoundPage from '@/components/404/NotFoundPage';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
  notFoundComponent: () => <NotFoundPage />,
});

function RouteComponent() {
  const { collapsed, toggled, openSidebar } = useStatePageAdmin();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid container size={'grow'} sx={{ height: '100%' }}>
          <SidebarAdmin collapsed={collapsed} toggled={toggled} onBackdropClick={openSidebar} />
          <Grid container size={'grow'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: '100%',
                flexGrow: 1,
              }}
            >
              <Box>
                <AppBarAdmin onMenuClick={openSidebar} />
                <Box sx={{ p: 2 }}>
                  <Outlet />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
