import { useMenuProfile } from './useMenuProfile';
import { UserCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const MenuProfile = () => {
  const { logout } = useMenuProfile();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="icon" size="icon" title="Abrir menu de usuário">
          <UserCircle/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>My account</DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuProfile;
