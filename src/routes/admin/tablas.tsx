import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/tablas')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
