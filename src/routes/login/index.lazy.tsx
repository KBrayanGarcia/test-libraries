import { createLazyFileRoute } from '@tanstack/react-router';
import useStatePageLogin from '@/hooks/pages/useStatePageLogin';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createLazyFileRoute('/login/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { handleSubmit } = useStatePageLogin();

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="username" className="block mb-2">
                Usuario
              </Label>
              <Input id="username" />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="block mb-2">
                Contraseña
              </Label>
              <Input id="password" />
            </div>
            <Button onClick={handleSubmit} className="w-full">
              Iniciar sesión
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
