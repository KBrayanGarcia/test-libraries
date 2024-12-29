import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuProfile from '../Menus/MenuProfile/MenuProfile';

const AppBarAdmin = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sistema de gestión de inventario
        </Typography>
        <MenuProfile />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarAdmin;
