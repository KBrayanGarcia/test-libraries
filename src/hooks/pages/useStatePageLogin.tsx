import { useNavigate } from '@tanstack/react-router';

const useStatePageLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('submit');
    navigate({
      to: '/admin',
      replace: true,
    });
  };

  return { handleSubmit };
};

export default useStatePageLogin;
