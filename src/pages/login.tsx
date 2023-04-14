import authService from '../api/authService';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../assets/img/login.png';

import { useAuth } from '../useAuth';

function Login() {
  const nav = useNavigate();
  const handleClick = async () => {
    authService.login();
  };

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      nav('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="login-page">
      <img src={login} alt="" className="login-background" />
      <button className="login-button" onClick={handleClick}>
        Click here
      </button>
    </div>
  );
}

export default Login;
