import { useMediaQuery } from '../genericos/useMediaQuery';
import { useState } from 'react';

export const useStatePageAdmin = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);
  const isMobile = useMediaQuery('md', 'down');

  const openSidebar = () => {
    if (isMobile) {
      setCollapsed(false);
      handleToggleSidebar();
    } else {
      handleCollapsedChange();
      setToggled(true);
    }
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  return {
    collapsed,
    toggled,
    openSidebar,
  };
};
