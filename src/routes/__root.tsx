import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

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
});
