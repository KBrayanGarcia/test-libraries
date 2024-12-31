import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

const useMenuProfile = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    navigate({
      to: '/login',
    });
  };

  return { anchorEl, handleMenu, handleClose, logout };
};

export default useMenuProfile;
