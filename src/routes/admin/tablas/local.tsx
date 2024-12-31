import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tablas/local')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/admin/tablas/local"
    </div>
  )
}
