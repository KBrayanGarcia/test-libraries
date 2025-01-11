import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from '@tanstack/react-router';
import { TableViewSharp } from '@mui/icons-material';

interface SidebarAdminProps {
  collapsed: boolean;
  toggled: boolean;
  onBackdropClick?: () => void;
}

const SidebarAdmin = ({ collapsed, toggled, onBackdropClick }: SidebarAdminProps) => {
  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onBackdropClick={onBackdropClick}
      rootStyles={{
        '.ps-sidebar-container': {
          backgroundColor: 'hsl(var(--primary))',
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: () => {
            return {
              [`&`]: {
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                '&.active': {
                  backgroundColor: 'hsl(var(--accent))',
                  color: 'hsl(var(--accent-foreground))',
                },
                '&:hover:not(.active)': {
                  backgroundColor: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  opacity: '0.8',
                },
              },
            };
          },
        }}
      >
        <SubMenu icon={<TableViewSharp />} label="Tablas">
          <MenuItem component={<Link to="/admin/tablas/get-server" />}>Paginación desde servidor</MenuItem>
          <MenuItem component={<Link to="/admin/tablas/local" />}>Paginación local</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarAdmin;
