import { useNavigate } from '@tanstack/react-router';

export const useMenuProfile = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate({
      to: '/login',
    });
  };

  return { logout };
};
