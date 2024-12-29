import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import Grid from '@mui/material/Grid2';
import useStatePageLogin from '@/hooks/pages/useStatePageLogin';

export const Route = createLazyFileRoute('/login/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { handleSubmit } = useStatePageLogin();

  return (
    <Box>
      <Grid
        container
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid size={2} sx={{ backgroundColor: 'darkgoldenrod' }}>
          <Card elevation={3}>
            <CardHeader title="Iniciar sesión" />
            <CardContent>
              <Typography variant="h6">Usuario</Typography>
              <Typography variant="h6">Contraseña</Typography>
              <Button variant="contained" color="primary" type="button" onClick={handleSubmit}>
                Iniciar sesión
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
