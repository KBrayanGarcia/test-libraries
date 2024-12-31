import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tablas/tablaserver')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Esta es la pagina de tablas desde servidor</div>
}
