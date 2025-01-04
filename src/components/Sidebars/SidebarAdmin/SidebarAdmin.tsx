import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from '@tanstack/react-router';
import useSidebarAdmin from './useSidebarAdmin';
import { TableViewSharp } from '@mui/icons-material';

interface SidebarAdminProps {
  collapsed: boolean;
  toggled: boolean;
  onBackdropClick?: () => void;
}

const SidebarAdmin = ({ collapsed, toggled, onBackdropClick }: SidebarAdminProps) => {
  const { theme } = useSidebarAdmin();

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      backgroundColor={theme.palette.primary.main}
      onBackdropClick={onBackdropClick}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            if (level === 0)
              return {
                color: active ? theme.palette.action.active : theme.palette.primary.contrastText,
                backgroundColor: active ? theme.palette.primary.main : undefined,
              };
          },
        }}
      >
        <SubMenu icon={<TableViewSharp />} label="Tablas">
          <MenuItem component={<Link to="/admin/tablas/get-server" />}>Paginación desde servidor</MenuItem>
          <MenuItem component={<Link to="/admin/tablas/local" />}>Pategorías</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarAdmin;
