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
        height: '100vh',
      }}
    >
      <AppBarAdmin onMenuClick={openSidebar} />
      <Grid container sx={{ height: '100%' }}>
        <Grid size={12} sx={{ height: '100%' }}>
          <Grid container size={'grow'} sx={{ height: '100%' }}>
            <SidebarAdmin collapsed={collapsed} toggled={toggled} onBackdropClick={openSidebar} />
            <Grid container size={'grow'}>
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  flex: '1',
                }}
              >
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
