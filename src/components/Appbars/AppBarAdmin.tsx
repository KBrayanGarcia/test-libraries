import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuProfile from '../Menus/MenuProfile/MenuProfile';
import { displayName, version } from '../../../package.json';

interface AppBarAdminProps {
  onMenuClick: () => void;
}

const AppBarAdmin = ({ onMenuClick }: AppBarAdminProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {displayName}{' '}
          <Typography variant="caption" component="sup" sx={{ fontSize: '0.7rem', opacity: 0.5 }}>
            v{version}
          </Typography>
        </Typography>
        <MenuProfile />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarAdmin;
