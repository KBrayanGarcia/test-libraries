import { Theme, useMediaQuery } from '@mui/material';
import { useState } from 'react';

export const useStatePageAdmin = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);
  const mediaQuery = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const openSidebar = () => {
    if (mediaQuery) {
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

