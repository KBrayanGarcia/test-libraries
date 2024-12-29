import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import ErrorRouter from '@/components/Error/ErrorRouter';
import NotFoundPage from '@/components/404/NotFoundPage';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <h1>Root</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
  errorComponent: () => {
    return <ErrorRouter />;
  },
  notFoundComponent: () => {
    return <NotFoundPage />;
  },
});
