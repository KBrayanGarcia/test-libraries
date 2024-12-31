import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Esta es la pagina de admin</div>;
}
