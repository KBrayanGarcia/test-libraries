import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { version, displayName } from '../../../package.json';
import MenuProfile from '../Menus/MenuProfile/MenuProfile';

interface AppBarAdminProps {
  onMenuClick: () => void;
}

const AppBarAdmin = ({ onMenuClick }: AppBarAdminProps) => {
  return (
    <header className="sticky top-0 w-full border-b px-4 shadow-slate-400 shadow-sm z-0">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="icon" size="icon" className="shrink-0" onClick={onMenuClick} title="Abrir barra lateral">
            <Menu />
          </Button>
          <h1 className="text-xl font-semibold">{displayName}</h1>
          <sup className="text-muted-foreground">v{version}</sup>
        </div>

        <MenuProfile />
      </div>
    </header>
  );
};

export default AppBarAdmin;
