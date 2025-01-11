import AppBarAdmin from '@/components/Appbars/AppBarAdmin';
import { useStatePageAdmin } from '@/hooks/pages/useStatePageAdmin';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import SidebarAdmin from '@/components/Sidebars/SidebarAdmin/SidebarAdmin';
import NotFoundPage from '@/components/404/NotFoundPage';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
  notFoundComponent: () => <NotFoundPage />,
});

function RouteComponent() {
  const { collapsed, toggled, openSidebar } = useStatePageAdmin();

  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-screen w-screen">
        <SidebarAdmin collapsed={collapsed} toggled={toggled} onBackdropClick={openSidebar} />
        <div className="flex flex-col grow">
          <AppBarAdmin onMenuClick={openSidebar} />
          <div className="flex grow flex-col justify-between overflow-y-auto">
            <div className="p-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
