import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tablas/get-server')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/tablas/get-server"!</div>;
}
